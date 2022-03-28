import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'
import Auth from './components/landingpage/loginAuth'
import Assetdirect from './components/landingpage/assetdirect'
import Allasset from './components/alertmanagement/getAsset'
import Alertasset from './components/alertmanagement/editalert'
import Showalert from './components/alertmanagement/showalert'
import Blog from './components/blog/blog'
import Addblog from './components/blog/addblog'
import Oneblogpost from './components/blog/blogContent'
import Tree from './components/asset/tressStructure'
import EditTransformer from './components/asset/editAsset'
import AssetPage from './pages/assetPage'
import Login from './pages/login'
import Table from './pages/maintainTable'
import CSV from './pages/csvUpload'
import WorkorderAssets from './pages/workorderPage'
import card from './components/landingpage/cardviews'
import LandingPage from './pages/LandingPage'
import AddTransFormer from './pages/addTransFormer'
import Tile from './components/report/tile'
import Catetagory from './components/marketplace/CartScreen'
// import AddProduct from './components/marketplace/product/addproduct'
import Pdf from './components/pdf/pdf'
import Sidenav from './components/navigation/sidenav'
import SampleTable from './components/Table/sampleTable'
import SampleTable2 from './components/Table/sampleTable2'
import ScheduleFront from './components/scheduling/frontScheduling'
import TablePopup from './components/Internalworkorder/internalWorkordertablepopup'
import Num from './components/Internalworkorder/oneinternalworkorder'
import TestFront from './components/Internalworkorder/testfront'
import AddWorkorder from './components/Internalworkorder/addinternaworkorder'
import GetExternalDetails from './components/Externalworkorder/getExternalWorkorder'
import ExternalInfo from './components/Externalworkorder/externalDetailsFrom'
import Addexternal from './components/Externalworkorder/addExternal'

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
          <Route path="/workorder" component={WorkorderAssets} exact />
          <Route path="/workorder/:id" component={Blog} exact />
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
          <Route path="/testfront" component={TestFront} exact />
          <Route path="/addexternalworkorder/:id" component={Addexternal} exact />
          <Route path="/pdf" component={Pdf} exact />
          <Route path="/sidenav" component={Sidenav} exact />
          <Route path="/sample" component={SampleTable} exact />
          <Route path="/sample2" component={SampleTable2} exact />
          <Route path="/tpop/:id" component={TablePopup} exact />
          <Route path="/schedule" component={ScheduleFront} exact />
          <Route path="/externalInfo/:id" component={ExternalInfo} exact />
          <Route path="/edit/transformer/:id" component={EditTransformer} exact />
          <Route path="/getExternal" component={GetExternalDetails} exact />

          {/* <Route path="/addproduct" component={AddProduct} exact /> */}
          {/* <Route path="/login" component={Login} exact /> */}

          <Auth0Provider
            domain="dev-p8n2oo9f.us.auth0.com"
            clientId="gAKJ86WP0vlgWshzjHxk7ho4jvkxPbfh"
            redirectUri={window.location.origin}
            audience="this is unique idetifier"
            scope="openid profile email">

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
