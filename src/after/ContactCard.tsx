import avatar from "../../public/cat.jpeg";
import styled from "styled-components";

const Background = styled.article`
  background: slateblue;
  width: max-content;
  padding: 64px;
`;

const Wrapper = styled.div`
  min-width: 250px;
  border-radius: 32px;
  padding: 24px;
  background: white;
  box-shadow: 0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;
`;

const Avatar = styled.img`
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -64px;
  margin-bottom: 16px;
  border: 6px solid white;
`;

const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0px;
`;

const Email = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: hsl(0deg 0% 40%);
`;
/**
 * 
 * .wrapper {

}

.contact-card {
  min-width: 250px;
  border-radius: 32px;
  padding: 24px;
  background: white;
  box-shadow: 0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;
}

.contact-card .avatar {
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -64px;
  margin-bottom: 16px;
  border: 6px solid white;
}

.contact-card h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0px;
}

.contact-card p {
  font-size: 1rem;
  font-weight: 300;
  color: hsl(0deg 0% 40%);
}

 */

export default function ContactCard({
  name,
  email
}: {
  name: string;
  email: string;
}) {
  return (
    <Background>
      <Wrapper>
        <Avatar alt="img" src={avatar} />
        <Name>{name}</Name>
        <Email>{email}</Email>
      </Wrapper>
    </Background>
  );
}
