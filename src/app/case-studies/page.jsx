import CaseStudyCTA from "./sections/CaseStudyCTA"
import CaseStudyHero from "./sections/CaseStudyHero"
import CaseStudyPortfolio from "./sections/CaseStudyPortfolio"
import CaseStudyResults from "./sections/CaseStudyResults"


const page = () => {
  return (
    <main className="mb-10">
       <CaseStudyHero/>
       <CaseStudyPortfolio/>
       <CaseStudyResults/>
       <CaseStudyCTA/>
    </main>
  )
}

export default page