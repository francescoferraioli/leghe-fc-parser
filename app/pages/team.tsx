import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import * as fs from 'fs'
import path from 'path'
import { Table } from 'rsuite'

interface TeamData {
  team: any
}

const Teams: NextPage<TeamData> = ({ team }: TeamData) => {
  return (
    <div>
      <Head>
        <title>Team</title>
      </Head>
      <div style={{height: "100vh"}}>
        <Table
          fillHeight
          data={team.players}
          onRowClick={data => {
            console.log(data);
          }}
        >
          <Table.Column width={300} fixed>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.Cell dataKey="name" />
          </Table.Column>

          <Table.Column width={300} fixed>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.Cell dataKey="role" />
          </Table.Column>

          <Table.Column width={300} fixed>
            <Table.HeaderCell>Team</Table.HeaderCell>
            <Table.Cell dataKey="team" />
          </Table.Column>
        </Table>
      </div>
    </div>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const teamsPath = path.join(process.cwd(), "..", "dist", "teams", "all.json")
  const team = JSON.parse(fs.readFileSync(teamsPath, 'utf8')).filter((x: any) => x.name === query.name)[0];
  return { props: { team } }
}

export default Teams
