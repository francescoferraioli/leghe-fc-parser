import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import * as fs from 'fs'
import path from 'path'
import { Table } from 'rsuite'

interface TeamsData {
  teams: any
}

const Teams: NextPage<TeamsData> = ({ teams }: TeamsData) => {
  return (
    <div>
      <Head>
        <title>Teams</title>
      </Head>
      <div style={{height: "100vh"}}>
        <Table
          fillHeight
          data={teams}
          onRowClick={data => {
            window.location.href = `/team?name=${data.name}`
          }}
        >
          <Table.Column width={300} fixed>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.Cell dataKey="name" />
          </Table.Column>

          <Table.Column width={300} fixed>
            <Table.HeaderCell>Coach</Table.HeaderCell>
            <Table.Cell dataKey="coach" />
          </Table.Column>
        </Table>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const teamsPath = path.join(process.cwd(), "..", "dist", "teams", "all.json")
  const teams = JSON.parse(fs.readFileSync(teamsPath, 'utf8'));
  return { props: { teams } }
}

export default Teams
