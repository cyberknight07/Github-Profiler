import React from 'react'
import { theme } from '../../../config/constants/theme'
import { Link, useParams } from 'react-router'
import { buildRoute, config} from '../../../config/config'
import SearchComponent from '../search/Search'

const Header = () => {

  const {username} = useParams<string>();

  return (
    <div style={{...theme.typography.headlineLgMobile, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '65vw'}}>
            <Link to={config.routes.home}><span style={{...theme.typography.headlineLg}}>Github Profiler</span></Link>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {
                  username && (<Link to={buildRoute.profile(username)}><span style={{...theme.typography.codeSm}}>Profile</span></Link>)
                }
                
                {/* <span>Explore</span>
                <span>Repositories</span>
                <span>Network</span> */}
            </div>
        </div>
        <hr style={{width: '100vw', marginBottom: '20px'}}/>
    </div>
  )
}

export default Header