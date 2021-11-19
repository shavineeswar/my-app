import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login'
import Table from './pages/maintainTable'
import CSV from './pages/csvUpload'
import card from './components/landingpage/cardviews'
import LandingPage from './pages/LandingPage'
import AddTransFormer from './pages/addTransFormer'
import Auth from './components/landingpage/loginAuth'
import { Auth0Provider } from '@auth0/auth0-react'
import Assetdirect from './components/landingpage/assetdirect'
import Allasset from './components/alertmanagement/getAsset'
import Alertasset from './components/alertmanagement/editalert'
import Showalert from './components/alertmanagement/showalert'
import WorkorderAssets from './components/Internalworkorder/getAllAsset'
import Workorder from './components/Internalworkorder/workOderforAsset'
import AddWorkorder from './components/Internalworkorder/addworkorder'
import Blog from './components/blog/blog'
import Addblog from './components/blog/addblog'
import Oneblogpost from './components/blog/blogContent'
import Tree from './components/asset/tressStructure'
import Oneasset from './components/asset/oneAsset'
import AssetPage from './pages/assetPage'
import Num from './components/Internalworkorder/oneinternalworkorder'
import Tile from './components/report/tile'
import Catetagory from './components/marketplace/CartScreen'


function App() {
  return (

    <Router>

      <section>
        <Switch>
        <Route path="/table" component={Table} exact />
        <Route path="/drop" component={AddTransFormer} exact />
        <Route path="/asset" component={Assetdirect} exact />
        <Route path="/alert" component={Allasset} exact />
        <Route path="/alert/:id" component={Showalert} exact />
        <Route path="/alert/edit/:id" component={Alertasset} exact />
        {/* <Route path="/workorder" component={WorkorderAssets} exact />
        <Route path="/workorder/:id" component={Workorder} exact /> */}
        <Route path="/addworkorder/:id" component={AddWorkorder} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/addblog" component={Addblog} exact />
        <Route path="/blog/:id" component={Oneblogpost} exact />
        <Route path="/tree" component={Tree} exact />
        <Route path="/asset/:id" component={AssetPage} exact />
        <Route path="/one" component={AssetPage} exact />
        <Route path="/internal/:id" component={Num} exact />
        <Route path="/tile" component={Tile} exact />
        <Route path="/cate" component={Catetagory} exact />

          {/* <Route path="/login" component={Login} exact /> */}
          
          <Auth0Provider
            domain="dev-p8n2oo9f.us.auth0.com"
            clientId="gAKJ86WP0vlgWshzjHxk7ho4jvkxPbfh"
            redirectUri={window.location.origin}
            audience  ="this is unique idetifier"
            scope ="openid profile email">
            
            <Route path="/auth" component={Auth} exact />
            <Route path="/" component={LandingPage} exact />
            
          <Route path="/upload" component={CSV} exact />
          <Route path="/card" component={card} exact />
          <Route path="/user" component={Login} exact />
          </Auth0Provider>

         

        </Switch>
      </section>
    </Router>

  );
}

export default App;
