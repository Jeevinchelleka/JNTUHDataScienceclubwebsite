export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { createTransport } from "@smithery/sdk"
import { Client } from "@modelcontextprotocol/sdk/client/index.js"
import { generateText, dynamicTool, stepCountIs } from "ai"
import { mistral } from "@ai-sdk/mistral"
import { z } from "zod/v3"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]

    if (!process.env.SMITHERY_API_KEY) {
      return new Response(JSON.stringify({ error: "SMITHERY_API_KEY is required" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const transport = createTransport("https://server.smithery.ai/@nickthelegend/jntu-mcp-server/mcp", {
      apiKey: process.env.SMITHERY_API_KEY,
    })

    const client = new Client({ name: "WebSearchClient", version: "1.0.0" })
    await client.connect(transport)

    const { tools: toolDefs } = await client.listTools()

    function makeTool(name: string, description?: string) {
      return dynamicTool({
        description: description ?? `Tool for ${name}`,
        inputSchema: z.object({
          id: z.string().optional(),
          slug: z.string().optional(),
        }),
        execute: async (args) => {
          return await client.callTool({ name, arguments: args })
        },
      })
    }

    const adaptedTools: Record<string, any> = {
      department_civil_engineering: makeTool("department_civil_engineering"),
      department_electrical_and_electronics_engineering: makeTool("department_electrical_and_electronics_engineering"),
      department_mechanical_engineering: makeTool("department_mechanical_engineering"),
      department_electronics_and_communication_engineering: makeTool("department_electronics_and_communication_engineering"),
      department_computer_science: makeTool("department_computer_science"),
      department_metallurgical_engineering: makeTool("department_metallurgical_engineering"),
      department_chemical_engineering: makeTool("department_chemical_engineering"),
      department_mathematics: makeTool("department_mathematics"),
      department_physics: makeTool("department_physics"),
      department_chemistry: makeTool("department_chemistry"),
      center_for_transportation_engineering: makeTool("center_for_transportation_engineering"),
      department_humanities_and_social_sciences: makeTool("department_humanities_and_social_sciences"),
      centre_for_energy_studies: makeTool("centre_for_energy_studies"),
      department_by_id: makeTool("department_by_id"),
      department_about_by_id: makeTool("department_about_by_id"),
      department_about_civil: makeTool("department_about_civil"),
      department_about_mechanical: makeTool("department_about_mechanical"),
      department_about_electrical: makeTool("department_about_electrical"),
      department_about_electronics: makeTool("department_about_electronics"),
      department_about_cse: makeTool("department_about_cse"),
      department_about_metallurgical: makeTool("department_about_metallurgical"),
      department_about_chemical: makeTool("department_about_chemical"),
      department_about_mathematics: makeTool("department_about_mathematics"),
      department_about_physics: makeTool("department_about_physics"),
      department_about_chemistry: makeTool("department_about_chemistry"),
      department_about_cte: makeTool("department_about_cte"),
      department_about_hss: makeTool("department_about_hss"),
      department_about_energy: makeTool("department_about_energy"),
      hod_by_id: makeTool("hod_by_id"),
      hod_civil: makeTool("hod_civil"),
      hod_mechanical: makeTool("hod_mechanical"),
      hod_electrical: makeTool("hod_electrical"),
      hod_electronics: makeTool("hod_electronics"),
      hod_cse: makeTool("hod_cse"),
      hod_metallurgical: makeTool("hod_metallurgical"),
      hod_chemical: makeTool("hod_chemical"),
      hod_mathematics: makeTool("hod_mathematics"),
      hod_physics: makeTool("hod_physics"),
      hod_chemistry: makeTool("hod_chemistry"),
      hod_cte: makeTool("hod_cte"),
      hod_hss: makeTool("hod_hss"),
      hod_energy: makeTool("hod_energy"),
      faculty_by_id: makeTool("faculty_by_id"),
      faculty_civil: makeTool("faculty_civil"),
      faculty_mechanical: makeTool("faculty_mechanical"),
      faculty_electrical: makeTool("faculty_electrical"),
      faculty_electronics: makeTool("faculty_electronics"),
      faculty_cse: makeTool("faculty_cse"),
      faculty_metallurgical: makeTool("faculty_metallurgical"),
      faculty_chemical: makeTool("faculty_chemical"),
      faculty_mathematics: makeTool("faculty_mathematics"),
      faculty_physics: makeTool("faculty_physics"),
      faculty_chemistry: makeTool("faculty_chemistry"),
      faculty_cte: makeTool("faculty_cte"),
      faculty_hss: makeTool("faculty_hss"),
      faculty_energy: makeTool("faculty_energy"),
      facilities_overview: makeTool("facilities_overview"),
      jntuh_history: makeTool("jntuh_history"),
      jntuh_awards_and_honours: makeTool("jntuh_awards_and_honours"),
      building_by_id: makeTool("building_by_id"),
      building_by_slug: makeTool("building_by_slug"),
      building_list: makeTool("building_list"),
      students_club: makeTool("students_club"),
      student_scholarships: makeTool("student_scholarships"),
      governing_council: makeTool("governing_council"),
      current_principal: makeTool("current_principal"),
      current_vice_principal: makeTool("current_vice_principal"),
      academic_council: makeTool("academic_council"),
      non_teaching_staff: makeTool("non_teaching_staff"),
      library_overview: makeTool("library_overview"),
      built_area: makeTool("built_area"),
      physical_education: makeTool("physical_education"),
      national_service_scheme: makeTool("national_service_scheme"),
    }

    const result = await generateText({
      model: mistral("mistral-large-latest"),
      tools: adaptedTools,
      toolChoice: "auto",
      stopWhen: stepCountIs(5),
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
      system: `You are a Web Search Agent powered by advanced search capabilities. You can call JNTU MCP tools to fetch structured data.

Available tools are mapped from the JNTU MCP server.`,
    })

    await client.close()

    return new Response(result.text, {
      headers: { "Content-Type": "text/plain" },
    })
  } catch (error) {
    console.error("Web Agent error:", error)
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}


