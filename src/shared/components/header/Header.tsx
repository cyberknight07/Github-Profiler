import { theme } from '../../../config/constants/theme'
import { Link, useParams } from 'react-router'
import { buildRoute, config} from '../../../config/config'
import SearchComponent from '../search/Search'
import { Headerr, HeaderWrapper } from './header.styles'

const Header = () => {

  const {username} = useParams<string>();

  return (
    <HeaderWrapper>
        <Headerr>
            <Link to={config.routes.home}><span style={{...theme.typography.headlineLg}}>Github Profiler</span></Link>
            <SearchComponent/>
                {
                  username && (<Link to={buildRoute.profile(username)}><span style={{...theme.typography.headlineLgMobile}}>Profile</span></Link>)
                }
            
        </Headerr>
        <hr/>
    </HeaderWrapper>
  )
}

export default Header;