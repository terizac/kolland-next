import { useEffect, useState } from "react";
import { list_project } from "../api/index.js";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

export default function AccountInfo({ toggle, hasCurrent }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetch_projects = async () => {
      try {
        const res = await list_project();
        // 獲取當前網頁網址
        setProjects(res.data);
      } catch (e) {
        const res = {
          data: [
            {
              name: "project1",
              contract_address: "0x6887246668a3b87F54DeB3b94Ba47a6f63F32985",
              website_links: ["https://boredapeyachtclub.com/"],
            },
          ],
        };
        setProjects(res.data);
      }
    };
    fetch_projects();
  }, []);
  return (
    <>
      <div className="project-list">
        <div className="title">Account Info</div>

        {projects && projects.length > 0 ? (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Project</Th>
                  <Th>Token</Th>
                  <Th>Share Ratio</Th>
                  <Th>Website</Th>
                  <Th>Generate Suggest Link</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projects.map((data) => (
                  <Tr key={data.name}>
                    <Td>{data.name}</Td>
                    <Td>{data.token}</Td>
                    <Td>{data.share_ratio?.kol} %</Td>
                    <Td>{data.website_links.map(link => 
                      <a rel="noreferrer" key={link} href={link} target="_blank">link</a>)}</Td>
                    <Td>
                    <Button colorScheme='teal' variant='outline'>Generate</Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <div className="empty-content">
            <div className="empty-title">No Projects</div>
          </div>
        )}
      </div>
    </>
  );
}
