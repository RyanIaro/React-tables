import './App.css';
import { CardHeader } from './components/cardheader';
import { CardBody } from './components/cardbody';
import { Thead } from './components/thead';
import { Tfoot } from './components/tfoot';
import { TEntry } from './components/tentry';
import { Search } from './components/search';
import { DropDown } from './components/dropdown';
import { SideHead } from './components/sidehead';
import { SideMenu } from './components/sidemenu';
import { MainCard } from './components/maincard';
import { Link } from './components/link';
import { TopNav } from './components/topnav';
import { CollapsedLink } from './components/collapsedlink';
import { CollapsedContent } from './components/collapsedcontent';
import { BreadCrumb } from './components/breadcrumb';

function App() {
  return (
    <body class="sb-nav-fixed">
        <TopNav>
            <Search/>
            <DropDown/>
        </TopNav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <SideHead label="Core"/>
                            <SideMenu href="index.html" className="fas fa-tachometer-alt" label="Dashboard"/>
                            <SideHead label="Interface"/>
                            <CollapsedLink label ="Layouts" target="#collapseLayouts"/>
                            <CollapsedContent id="collapseLayouts">
                                <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                            </CollapsedContent>
                            <CollapsedLink label ="Pages" target="#collapsePages"/>
                            <CollapsedContent id="collapsePages">
                                <CollapsedLink label="Authentication" target="#pagesCollapseAuth"/>
                                <CollapsedContent id="pagesCollapseAuth">
                                    <a class="nav-link" href="login.html">Login</a>
                                    <a class="nav-link" href="register.html">Register</a>
                                    <a class="nav-link" href="password.html">Forgot Password</a>
                                </CollapsedContent>
                                <CollapsedLink label="Error" target="#pagesCollapseError"/>
                                <CollapsedContent id="pagesCollapseError">
                                    <a class="nav-link" href="401.html">401 Page</a>
                                    <a class="nav-link" href="404.html">404 Page</a>
                                    <a class="nav-link" href="500.html">500 Page</a>
                                </CollapsedContent>
                            </CollapsedContent>
                            <SideHead label="Addons"/>
                            <SideMenu href="charts.html" className="fas fa-chart-area" label="Charts"/>
                            <SideMenu href="tables.html" className="fas fa-table" label="Tables"/>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Tables</h1>
                        <BreadCrumb one=" Dashboard" two=" Tables"/>
                        <CardBody content='DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the'>
                            <Link target="_blank" href="https://datatables.net/" label="official DataTables documentation"/>
                        </CardBody>
                        <MainCard>
                            <CardHeader label="DataTable Example"/>
                            <CardBody>
                                <table id="datatablesSimple">
                                    <Thead/>
                                    <Tfoot/>
                                    <tbody>
                                        <TEntry name="Tiger Nixon" position="System Architect" office="Edinburgh" age="61" start_date="2011/04/25" salary="$320,800"/>
                                        <TEntry name="Garrett Winters" position="Accountant" office="Tokyo" age="63" start_date="2011/07/25" salary="$170,750"/>
                                        <TEntry name="Ashton Cox" position="Junior Technical Author" office="San Francisco" age="66" start_date="2009/01/12" salary="$86,000"/>
                                        <TEntry name="Cedric Kelly" position="Senior Javascript Developer" office="Edinburgh" age="22" start_date="2012/03/29" salary="$433,060"/>
                                        <TEntry name="Airi Satou" position="Accountant" office="Tokyo" age="33" start_date="2008/11/28" salary="$162,700"/>
                                        <TEntry name="Brielle Williamson" position="Integration Specialist" office="New York" age="61" start_date="2012/12/02" salary="$372,000"/>
                                        <TEntry name="Herrod Chandler" position="Sales Assistant" office="San Francisco" age="59" start_date="2012/08/06" salary="$137,500"/>
                                        <TEntry name="Rhona Davidson" position="Integration Specialist" office="Tokyo" age="55" start_date="2010/10/14" salary="$327,900"/>
                                        <TEntry name="Colleen Hurst" position="Javascript Developer" office="San Francisco" age="39" start_date="2009/09/15" salary="$205,500"/>
                                        <TEntry name="Sonya Frost" position="Software Engineer" office="Edinburgh" age="23" start_date="2008/12/13" salary="$103,600"/>
                                        <TEntry name="Jena Gaines" position="Office Manager" office="London" age="30" start_date="2008/12/19" salary="$90,560"/>
                                        <TEntry name="Quinn Flynn" position="Support Lead" office="Edinburgh" age="22" start_date="2013/03/03" salary="$342,000"/>
                                        <TEntry name="Charde Marshall" position="Regional Director" office="San Francisco" age="36" start_date="2008/10/16" salary="$470,600"/>
                                        <TEntry name="Haley Kennedy" position="Senior Marketing Designer" office="London" age="43" start_date="2012/12/18" salary="$313,500"/>
                                        <TEntry name="Tatyana Fitzpatrick" position="Regional Director" office="London" age="19" start_date="2010/03/17" salary="$385,750"/>
                                        <TEntry name="Michael Silva" position="Marketing Designer" office="London" age="66" start_date="2012/11/27" salary="$198,500"/>
                                        <TEntry name="Paul Byrd" position="Chief Financial Officer (CFO)" office="New York" age="64" start_date="2010/06/09" salary="$725,000"/>
                                        <TEntry name="Gloria Little" position="Systems Administrator" office="New York" age="59" start_date="2009/04/10" salary="$237,500"/>
                                        <TEntry name="Bradley Greer" position="Software Engineer" office="London" age="41" start_date="2012/10/13" salary="$132,000"/>
                                        <TEntry name="Dai Rios" position="Personnel Lead" office="Edinburgh" age="35" start_date="2012/09/26" salary="$217,500"/>
                                        <TEntry name="Jenette Caldwell" position="Development Lead" office="New York" age="30" start_date="2011/09/03" salary="$345,000"/>
                                        <TEntry name="Yuri Berry" position="Chief Marketing Officer (CMO)" office="New York" age="40" start_date="2009/06/25" salary="$675,000"/>
                                        <TEntry name="Caesar Vance" position="Pre-Sales Support" office="New York" age="21" start_date="2011/12/12" salary="$106,450"/>
                                        <TEntry name="Doris Wilder" position="Sales Assistant" office="Sidney" age="23" start_date="2010/09/20" salary="$85,600"/>
                                        <TEntry name="Angelica Ramos" position="Chief Executive Officer (CEO)" office="London" age="47" start_date="2009/10/09" salary="$1,200,000"/>
                                        <TEntry name="Gavin Joyce" position="Developer" office="Edinburgh" age="42" start_date="2010/12/22" salary="$92,575"/>
                                        <TEntry name="Jennifer Chang" position="Regional Director" office="Singapore" age="28" start_date="2010/11/14" salary="$357,650"/>
                                        <TEntry name="Brenden Wagner" position="Software Engineer" office="San Francisco" age="28" start_date="2011/06/07" salary="$206,850"/>
                                        <TEntry name="Fiona Green" position="Chief Operating Officer (COO)" office="San Francisco" age="48" start_date="2010/03/11" salary="$850,000"/>
                                        <TEntry name="Shou Itou" position="Regional Marketing" office="Tokyo" age="20" start_date="2011/08/14" salary="$163,000"/>
                                        <TEntry name="Michelle House" position="Integration Specialist" office="Sidney" age="37" start_date="2011/06/02" salary="$95,400"/>
                                        <TEntry name="Suki Burks" position="Developer" office="London" age="53" start_date="2009/10/22" salary="$114,500"/>
                                        <TEntry name="Prescott Bartlett" position="Technical Author" office="London" age="27" start_date="2011/05/07" salary="$145,000"/>
                                        <TEntry name="Gavin Cortez" position="Team Leader" office="San Francisco" age="22" start_date="2008/10/26" salary="$235,500"/>
                                        <TEntry name="Martena Mccray" position="Post-Sales support" office="Edinburgh" age="46" start_date="2011/03/09" salary="$324,050"/>
                                        <TEntry name="Unity Butler" position="Marketing Designer" office="San Francisco" age="47" start_date="2009/12/09" salary="$85,675"/>
                                        <TEntry name="Howard Hatfield" position="Office Manager" office="San Francisco" age="51" start_date="2008/12/16" salary="$164,500"/>
                                        <TEntry name="Hope Fuentes" position="Secretary" office="San Francisco" age="41" start_date="2010/02/12" salary="$109,850"/>
                                        <TEntry name="Vivian Harrell" position="Financial Controller" office="San Francisco" age="62" start_date="2009/02/14" salary="$452,500"/>
                                        <TEntry name="Timothy Mooney" position="Office Manager" office="London" age="37" start_date="2008/12/11" salary="$136,200"/>
                                        <TEntry name="Jackson Bradshaw" position="Director" office="New York" age="65" start_date="2008/09/26" salary="$645,750"/>
                                        <TEntry name="Olivia Liang" position="Support Engineer" office="Singapore" age="64" start_date="2011/02/03" salary="$234,500"/>
                                        <TEntry name="Bruno Nash" position="Software Engineer" office="London" age="38" start_date="2011/05/03" salary="$163,500"/>
                                        <TEntry name="Sakura Yamamoto" position="Support Engineer" office="Tokyo" age="37" start_date="2009/08/19" salary="$139,575"/>
                                        <TEntry name="Thor Walton" position="Developer" office="New York" age="61" start_date="2013/08/11" salary="$98,540"/>
                                        <TEntry name="Finn Camacho" position="Support Engineer" office="San Francisco" age="47" start_date="2009/07/07" salary="$87,500"/>
                                        <TEntry name="Serge Baldwin" position="Data Coordinator" office="Singapore" age="64" start_date="2012/04/09" salary="$138,575"/>
                                        <TEntry name="Zenaida Frank" position="Software Engineer" office="New York" age="63" start_date="2010/01/04" salary="$125,250"/>
                                        <TEntry name="Zorita Serrano" position="Software Engineer" office="San Francisco" age="56" start_date="2012/06/01" salary="$115,000"/>
                                        <TEntry name="Jennifer Acosta" position="Junior Javascript Developer" office="Edinburgh" age="43" start_date="2013/02/01" salary="$75,650"/>
                                        <TEntry name="Cara Stevens" position="Sales Assistant" office="New York" age="46" start_date="2011/12/06" salary="$145,600"/>
                                        <TEntry name="Hermione Butler" position="Regional Director" office="London" age="47" start_date="2011/03/21" salary="$356,250"/>
                                        <TEntry name="Lael Greer" position="Systems Administrator" office="London" age="21" start_date="2009/02/27" salary="$103,500"/>
                                        <TEntry name="Jonas Alexander" position="Developer" office="San Francisco" age="30" start_date="2010/07/14" salary="$86,500"/>
                                        <TEntry name="Shad Decker" position="Regional Director" office="Edinburgh" age="51" start_date="2008/11/13" salary="$183,000"/>
                                        <TEntry name="Michael Bruce" position="Javascript Developer" office="Singapore" age="29" start_date="2011/06/27" salary="$183,000"/>
                                        <TEntry name="Donna Snider" position="Customer Support" office="New York" age="27" start_date="2011/01/25" salary="$112,000"/>
                                    </tbody>
                                </table>
                            </CardBody>
                        </MainCard>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </body>
  );
}

export default App;
