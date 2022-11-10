import React from 'react'
import styled from 'styled-components'
import { IoTrashOutline } from 'react-icons/io5'
import { BiEditAlt } from 'react-icons/bi'
import logo from '../../assets/logo-small.png'

const StyledRightComponent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 2rem;
    height: 100vh;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`

const Heading = styled.h3`
  font-size: ${props => props.size === 'small' ? "1.25rem" : "1.75rem"};
  font-weight: 400;

  span{
    font-weight: 700;
  }
`

const AddFolder = styled.div`
    font-size: 1rem;
    border-radius: 30px;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    span{
        font-size: 1.5rem;
        font-weight: 700;
    }

    &:hover{
        cursor: pointer;
    }
`

const FolderCard = styled.div`
    margin-bottom: 1rem;
`

const FolderIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
`

const PlayGroundCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`

const Card = styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 0 4px 0px #989898;
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

const CardContent = styled.div`
`

const Logo = styled.img`
    width: 70px;
    margin-right: 1rem;
`
const RightComponent = () => {
  return (
    <StyledRightComponent>
      <Header>
        <Heading size="large">
          My <span>Playground</span>
        </Heading>
        <AddFolder> <span>+</span> New Folder</AddFolder>
      </Header>
      <hr />

      {
        Array.from({ length: 4 }).map(() => (
          <FolderCard>
            <Header>
              <Heading size="small">
                Folder Name
              </Heading>
              <FolderIcons>
                <IoTrashOutline />
                <BiEditAlt />
                <AddFolder><span>+</span> New Playground</AddFolder>
              </FolderIcons>
            </Header>

            <PlayGroundCards>
              {
                Array.from({ length: 4 }).map(() => (
                  <Card>
                    <CardContainer>
                      <Logo src={logo} />
                      <CardContent>
                        <p>Playground Name</p>
                        <p>Language: C++</p>
                      </CardContent>
                    </CardContainer>
                    <FolderIcons>
                      <IoTrashOutline />
                      <BiEditAlt />
                    </FolderIcons>
                  </Card>
                ))
              }
            </PlayGroundCards>
          </FolderCard>
        ))
      }
    </StyledRightComponent>
  )
}

export default RightComponent;