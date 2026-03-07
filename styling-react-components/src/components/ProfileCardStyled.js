import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  background: White;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  }
`;

const CardHeader = styled.div`
  height: 120px;
  background: linear-gradient(135deg, #767eed 0%, #8d3edc 100%);
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
`;
const CardBody = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Name = styled.h2`
  margin: 5px 0;
  font-size: 24px;
  color: #bf41e1;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

const Title = styled.p`
  margin: 0 0 25px 0;
  font-size: 16px;
  color: #5f84bb;
  font-weight: 500;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
  padding: 20px 0;
  border-top: 1px solid #e2c8f0;
  border-bottom: 1px solid #e2c8f0;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StatNumber = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #5f84bb;
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 14px;
  color: #a0aec0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

const Bio = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #4a5568;
  margin: 0 0 25px 0;
  text-align: center;
  font-weight: 500;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const FollowButton = styled.button`
  flex: 1;
  padding: 2px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 243, 0.3);
  }
`;

const MessageButton = styled.button`
  flex: 1;
  padding: 2px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
   transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 243, 0.3);
`;

const ProfileCardStyled = () => {
  return (
    <CardContainer>
      <CardHeader>
        <ProfileImage>
          <img src="./Images/nani.jpg" alt="ProfileImage" />
        </ProfileImage>
      </CardHeader>
      <CardBody>
        <Name>John Doe</Name>
        <Title>Senior Developer </Title>
        <Stats>
          <Stat>
            <StatNumber>1.2k</StatNumber>
            <StatLabel>Followers</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>500</StatNumber>
            <StatLabel>Following</StatLabel>
          </Stat>

          <Stat>
            <StatNumber>24</StatNumber>
            <StatLabel>Posts</StatLabel>
          </Stat>
        </Stats>

        <Bio>
          Passionate developer with 5+ years of experience in building scalable
          web applications.
        </Bio>
        <Actions>
          <FollowButton>Follow</FollowButton>
          <MessageButton>Message</MessageButton>
        </Actions>
      </CardBody>
    </CardContainer>
  );
};

export default ProfileCardStyled;
