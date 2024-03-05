import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <main id="main"> 
      <div>
        <article className="bg-white dark-gray home1">
          <section className="home2">
            <div className="home3 mw7 pv5 ph3 tc white">
              <h1 className="f-subheadline-m f-subheadline-l f1 lh-title home4">Build amazing things</h1>
              <div className="home5 mw6 lh-copy">
                <div>We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</div>
                <h2 className="f2-l f3 lh-title home6">Take your JavaScript development up a notch</h2>
                <div>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</div>
                <div className="home7 mt5 flex flex-wrap">
                  <div className="home8 w-100 w-50-ns pr3-ns pb3">
                    <a to="/SignUP" className="home9 db mw5-ns center pv3 ph4 b no-underline white">Sign up for free</a>
                    </div>
                    <div className="home10 w-100 w-50-ns pl3-ns pb3">
                      <a href="/products/pro" className="home11 db mw5-ns center pv3 ph4 b no-underline white">Learn about Pro</a>
                      </div>
                      </div>
                      </div>
                      </div>
                      </section>
                      <section className="home12 pv5 ph3 bg-white">
                        <div className="home13 center mw6 mb5 tc lh-copy">
                          <img alt="" role="presentation" src="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png" srcset="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png, https://static.npmjs.com/attachments/ck3uwed1cmso79y74pjugy10f-gak-2x.png 2x, https://static.npmjs.com/attachments/ck3uweeyt72yk887420va22p9-gak-3x.png 3x" class="home14 db center mb4"/>
                          <h2 class="home15 f2-l f3 lh-title">Bring the best of open source to you, your team, and your company</h2>
                          <div>Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</div>
                          </div>
                          </section>
                          <Link href="https://fonts.googleapis.com/css?family=Arimo|Poppins:400,600,700&amp;display=swap" rel="stylesheet"></Link>
                          </article>
                          </div>
      </main>
    </div>
  );
}

export default Home;
