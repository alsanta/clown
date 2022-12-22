import React from 'react';

import ig from '../../images/ig.jpg'
import { Wrapper, Headline, Content} from './About.styles';

const About = (props) => {
    //     const [vName,setVName] = useState('');
    //     const history = useHistory();
    //     const {ParamNameFromRoute, otherParam, anotherParam} = useParams();

    return (
        <Wrapper>
            <Headline>The <br />Artist</Headline>
            <Content>
                <p>
                    Antonio Escobar aka Tonho Earlyhuman is a Hollywood, FL based artist, born in Bogotá, Colombia. Big time jokester and natural entertainer, designer and art director. After years of working in advertisement, he developed his unique style by focusing on the essential and visual components of geometric shapes which he arranges into symmetric patterns to make illustrative faces or masks that he calls clowns. He's been developing a series titled "I'm not your clown".
                </p>
                <p>
                    Exploring the dichotomy of emotions, using his own
                    personal narrative and the surrounding art scene as inspiration and referencing pre-Columbian culture with a contemporary twist. In the clown series, he uses mixed-media paintings, murals, screen printing, ceramics and furniture to create his characters. His pieces intend to reflect each individual's inherent power of creativity as a fundamental part of their nature while searching for his own identity in every face that he creates.
                </p>
            </Content>
                <a href="https://www.instagram.com/imnotyourclown/?hl=en">
                    <img src={ig} alt='Instagram logo' />
                    <p>@imnotyourclown</p>
                </a>
        </Wrapper>
    );
}

export default About;