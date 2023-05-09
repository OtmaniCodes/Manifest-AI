import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Manifesto.css'
import Fade from 'react-reveal/Fade'
import manifestoPDF from '../../assets/manifesto/manifest AI.pdf'
import logo from '../../assets/manifest_logo.png'
import manifesto from './Ten-Commendments'
import CommendmentsSlider from './CommendmentsSlider';
const Manifesto = () => {
    
const aboutData = [
    {
      title: "L'IA au service de l'humanité",
      descriptions: [
        "Nous plaçons l'humain au cœur de nos préoccupations. ",
        "Nous nous dévouons à concevoir, développer et déployer des solutions d'IA qui améliorent la qualité de vie, réduisent les inégalités et renforcent la solidarité entre les peuples.",
        ". Notre objectif est d'utiliser l'IA pour résoudre les défis mondiaux les plus pressants, tels que la faim, la pauvreté, le changement climatique et les maladies."
      ],
      graphic: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Éthique et responsabilité",
      descriptions: [
        "Nous nous engageons solennellement à respecter et promouvoir les principes éthiques fondamentaux dans le développement et l'application de l'IA. ",
        "Ces principes incluent le respect de la vie privée, la transparence, l'équité, la non-discrimination et la prise en compte des conséquences à long terme de nos actions. ",
        "Nous veillerons à ce que l'IA soit mise au service du bien commun et ne soit pas utilisée pour amplifier les disparités ou infliger des préjudices à autrui."
      ],
      graphic: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Participation et collaboration",
      descriptions: [
        "Nous croyons en l'importance de la coopération et du partage des connaissances pour assurer un avenir prospère et harmonieux, car la connaissance est la seule chose qui se multiplie lorsqu’on la partage. ",
        "Nous nous engageons à travailler en étroite collaboration avec d'autres organisations, gouvernements, chercheurs et citoyens afin d'encourager la communication transversale, la compréhension mutuelle et la collaboration pour relever les défis posés par l'IA."
      ],
      graphic: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Éducation et sensibilisation",
      descriptions: [
        "Nous nous dédions à promouvoir l'éducation et la sensibilisation aux questions liées à l'IA, afin d'encourager une adoption responsable, raisonnée et informée de ces technologies, en soulignant leur potentiel bénéfique tout en avertissant des risques qui lui sont associés. ",
        "Nous veillerons à ce que les générations actuelles et futures comprennent les opportunités et les risques liés à l'IA, et soient en mesure de contribuer à son développement de manière éthique et bénéfique pour tous."
      ],
      graphic: "https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "L'émotion au cœur de notre mission",
      descriptions: [
        "Nous prenons pleinement conscience de l'influence primordiale des émotions humaines dans notre pratique professionnelle. ",
        "Conscients que l'IA ne saurait être un simple automate, nous nourrissons la conviction qu'elle devienne notre alliée intuitive, capable de décrypter et d'exprimer avec justesse nos besoins affectifs les plus profonds. ",
        "Nous intégrerons l'empathie, la compassion et l'humanité dans nos solutions d'IA pour renforcer le lien entre les humains et la technologie, afin de créer un futur où nous travaillons ensemble pour relever les défis et célébrer nos réussites."
      ],
      graphic: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Innovation inclusive",
      descriptions: [
        "Nous nous dévouons à promouvoir une innovation inclusive, en veillant à ce que les bénéfices de l'IA soient accessibles à tous, indépendamment et Sans distinction aucune quant à leur origine, leur genre, leur âge ou leur condition économique. ",
        "Nous lutterons contre les biais et les discriminations dans les technologies d'IA, et travaillerons sans relâche pour créer des solutions justes et équitables."
      ],
      graphic: "https://images.pexels.com/photos/15177559/pexels-photo-15177559.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Transparence et responsabilité",
      descriptions: [
        "Nous nous engageons à être transparents dans nos intentions, nos méthodes et nos résultats. ",
        "Nous serons responsables de nos actions et notre détermination infaillible envers l'évaluation et l'amélioration constantes de nos pratiques témoignera de notre volonté à assurer un impact positif sur l'humanité, symbole de notre profond respect pour le bien-être de tous.",
        "Nous appelons tous ceux qui partagent notre vision d'une IA éthique et profitable à l'humanité à nous rejoindre dans cette quête passionnante et essentielle. ",
        "Ensemble, nous pouvons forger un avenir où la technologie sert l'humanité, protège nos valeurs et nourrit notre esprit d'innovation et de coopération.",
        "Ensemble, écrivons l'histoire d'un monde meilleur, façonné par une intelligence artificielle éthique et au service de l'humanité.",
        "Rejoignez-nous et prenons part à cette aventure collective pour façonner l'avenir que nous souhaitons léguer aux générations futures."
      ],
      graphic: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];
  
    return ( 
        <div className="commendments-container container">
            {/* <div className='commendments-manifest'>
                <img src={logo} alt="" />
            </div> */}
            <SectionTitle title={"Manifesto & Commendments"} subTitle={""}/>
            <div className='commendments-header'>
                <h3>MANIFESTO</h3>
                <p>Dear friends of artificial intelligence,</p>
                <p>We live in a time where technology is evolving at a rapid pace, disrupting both our daily lives and our future. Artificial intelligence (AI) is at the heart of this revolution, transforming industries, creating new opportunities while solving problems that humanity has faced for decades. However, these technological advancements also raise ethical questions and important challenges.</p>
                <p>We, the members of MANIFEST AI, are committed to ethical and beneficial AI to humanity. We are committed to promoting responsible, moral, and human-centered artificial intelligence. We write this manifesto to rally all those who believe in the power of AI to improve our lives, while preserving our humanity and ensuring a sustainable and equitable future for all.</p>
                {
                aboutData.map((data, i) => {
                    var graphicsFirst = i % 2 === 0;
                    return <div key={i} className="commendment-wrapper more-about-row row justify-content-between align-items-center">
                        <Fade left={!graphicsFirst} right={graphicsFirst} cascade>
                        <div className={`more-about-text col-md-7 text-md-start text-center order-2 order-md-${graphicsFirst ? 2 : 1}`}>
                            <h3 className='mb-md-3 fw-bold'>{data.title}</h3>
                            {
                            data.descriptions.map((d, j) => <p key={j}>{d}</p>)
                            }
                        </div>
                        </Fade>
                        <Fade left={graphicsFirst} right={!graphicsFirst}>
                            <div className={`col-md-4 mb-3 mb-md-0 text-md-start text-center order-1 order-md-${graphicsFirst ? 1 : 2}`}>
                                <img src={data.graphic} className='commenment-img more-about-img order-1 shadow-lg' />
                            </div>
                        </Fade>
                    </div>
                })
                }

                <div className='lead'>Download -
                    <a href={manifestoPDF} download> The 10 Commenments</a>
                    <span className='mx-2'>or</span>
                    <a href={manifestoPDF} download>The Manifesto</a>
                </div>
            </div>
            <hr />
            <div>
            <h3 style={{fontWeight:'bolder'}}>COMMENDMENTS</h3>
                {/* {
                aboutData.map((data, i) => {
                    var graphicsFirst = i % 2 === 0;
                    return <div key={i} className="commendment-wrapper more-about-row row justify-content-between align-items-center">
                        <Fade left={!graphicsFirst} right={graphicsFirst} cascade>
                        <div className={`more-about-text col-md-7 text-md-start text-center order-2 order-md-${graphicsFirst ? 2 : 1}`}>
                            <h3 className='mb-md-3 fw-bold'>{data.title}</h3>
                            {
                            data.descriptions.map((d, j) => <p key={j}>{d}</p>)
                            }
                        </div>
                        </Fade>
                        <Fade left={graphicsFirst} right={!graphicsFirst}>
                            <div className={`col-md-4 mb-3 mb-md-0 text-md-start text-center order-1 order-md-${graphicsFirst ? 1 : 2}`}>
                                <img src={data.graphic} className='commenment-img more-about-img order-1 shadow-lg' />
                            </div>
                        </Fade>
                    </div>
                })
                } */}
                {/* <CommendmentsSlider/> */}
            </div>

        </div>
     );
}
 
export default Manifesto;