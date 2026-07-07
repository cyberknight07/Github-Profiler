import { FooterWrapper, Title, Foter } from "./Footer.styles"

const Footer = () => {
  return (
    <FooterWrapper>
        <hr style={{width: '100vw'}}/>
        <Foter>
            <pre><Title>Profiler</Title></pre>    
            <pre>
              <span> @ 2026 Profiler</span>
            </pre>
            <pre>
              <span> Powered by cyberknight07</span>
            </pre>
        </Foter>
    </FooterWrapper>
  )
}

export default Footer