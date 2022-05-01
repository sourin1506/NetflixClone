import jumboData from "../fixtures/jumbo";
import { Jumbotron } from "../components";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((data, index) => (
        <Jumbotron key={index} direction={data.direction}>
          <Jumbotron.Wrap>
            <Jumbotron.Title>{data.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Wrap>
          <Jumbotron.Wrap>
            <Jumbotron.Image src={data.image} alt={data.alt}></Jumbotron.Image>
          </Jumbotron.Wrap>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
