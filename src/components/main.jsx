import { useEffect, useState } from "react"
import styled from "styled-components"



const Main = () => {

    const [issueList, setIssueList] = useState([])
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)

    useEffect(() => {
        async function fetchData() {

            // const res = await fetch(`https://api.github.com/repos/angular/angular-cli/issues?page=${page}&per_page=${perPage}`)
            const res = await fetch("https://api.github.com/repos/angular/angular-cli/issues")
            const res_data = await res.json()
            // setIssueList(res_data)

            console.log(res_data)
        }
        fetchData()
    }, [issueList, page, perPage])


    return <Wrapper>
        <Container>

            {/* {issueList.map((data, index) => <IssueBox key={index}>
                {data.title}
            </IssueBox>)} */}

            <p style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <button onClick={() => setPage(1)}>맨처음</button>
                <button onClick={() => setPage(page-1)}>이전</button>
                {/* <button>1~20</button> */}
                <button onClick={() => setPage(page+1)}>다음</button>
                <button onClick={() => setPage(20)}>맨끝</button>
            </p>
        </Container>
    </Wrapper>
}

export default Main

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const Container = styled.div`
    margin: auto;
    /* display: grid;
    grid-template-columns: 600px 600px 500px; */
`
const IssueBox = styled.div`
    border: 1px solid #999;
    border-radius: 6px;
    width: 300px;
    height: 70px;
    padding: 32px;
    margin: 20px;
`