import {services, business as b} from './data.mjs';

export function renderHome({image, icon, btn, eyebrow, faqs, cta, serviceCard}) {
 const entryPoints = [
  ['person','I’m looking for support','Find practical support for your everyday life and the goals ahead.','/services/','Explore our services'],
  ['people','I’m a family member or carer','Talk through the options with a team that takes time to listen.','/contact/','Talk with our team'],
  ['heart','I’d like to make a referral','A simple first step for participants, families and support coordinators.','/make-a-referral/','Make a referral'],
  ['plus','I have a question','Clear answers about support, the NDIS and getting started.','/faqs/','Find helpful answers']
 ];
 const featured = ['personal-care','daily-tasks-shared-living','household-tasks','social-community-participation','independent-living-skills','travel-transport'].map(slug=>services.find(s=>s.slug===slug));
 const safeguards = [
  ['person','Your choices come first','Be part of the decisions about your support, with space for your goals and preferences.','/about-us/#our-promises','Our promises to you'],
  ['shield','Your dignity and privacy','Understand how your information is handled and where to find our policies.','/privacy-policies/','Privacy & policies'],
  ['heart','Your voice matters','Ask questions, share feedback or raise a concern. We make it easy to find the next step.','/feedback/','Feedback & complaints'],
  ['people','Respect for who you are','Your culture, identity and ways of communicating help shape the support you receive.','/about-us/#our-guiding-principles','Our guiding principles']
 ];
 return `<div class="redesign-home">
 <section class="care-hero" aria-labelledby="care-hero-title">
  <div class="wrap care-hero-grid">
   <div class="care-hero-copy">
    ${eyebrow('NDIS support in Melbourne')}
    <h1 id="care-hero-title">NDIS support,<br> shaped around<br> <span>your life.</span></h1>
    <p>Person-centred NDIS support in Melbourne. From our Niddrie office, we help you explore everyday assistance, community connections and greater independence.</p>
    <div class="button-row">${btn('Contact Our Team','/contact/')}${btn('Explore Our Services','/services/','outline')}</div>
    <p class="care-hero-footnote">${icon('heart')}Good support starts with you.</p>
   </div>
   <div class="care-hero-art">
    <span class="care-orbit" aria-hidden="true"></span>
    <div class="care-hero-photo-primary">${image('hero.webp','A woman standing behind a man using a wheelchair on a leafy park path','care-hero-photo',true)}</div>
    <div class="care-hero-photo-secondary">${image('community-life.webp','Friends enjoying time together outdoors','care-hero-companion')}</div>
    <div class="care-photo-caption">${icon('heart')}<span>More choice.<br> <strong>More possibilities.</strong></span></div>
    <span class="care-leaf" aria-hidden="true">${icon('leaf')}</span>
   </div>
  </div>
 </section>
 <div class="wrap care-trust-wrap"><div class="care-trust-bar">
  <a href="/ndis-information/" class="care-trust-provider"><img src="/assets/ndis-provider-logo.png" alt="NDIS" width="186" height="99" decoding="async"><span>Registered<br> <strong>NDIS provider</strong></span></a>
  <span>${icon('person')}<span>Your choices<br> <strong>At the centre</strong></span></span>
  <span>${icon('people')}<span>Your community<br> <strong>Meaningful connections</strong></span></span>
  <a href="/areas-we-serve/">${icon('pin')}<span>Based in Niddrie<br> <strong>Here in Melbourne</strong></span></a>
 </div></div>

 <section class="section care-welcome" aria-labelledby="care-welcome-title"><div class="wrap care-welcome-grid">
  <div class="care-welcome-art">
   <div class="care-welcome-photo">${image('creative.webp','Two adults enjoying painting together','care-about-image')}</div>
   <div class="care-welcome-inset">${image('support-conversation.webp','Two adults talking at home','care-about-inset-image')}</div>
   <div class="care-welcome-label">${icon('people')}People first.<br> Always.</div>
  </div>
  <div class="care-welcome-copy">${eyebrow('Get to know I Care Group Services')}<h2 id="care-welcome-title">Local roots.<br> <span>Individual possibilities.</span></h2>
   <p class="lead">I Care Group Services is based in Niddrie, Melbourne, supporting people with disability to take part in everyday life.</p>
   <p>Our purpose is to help people build independence, strengthen connections and work towards their own goals. We value the knowledge people bring about their own lives, including their families, carers and chosen supporters.</p>
   <ul class="care-values"><li>${icon('check')}Your needs, preferences and goals</li><li>${icon('check')}Respectful, clear communication</li><li>${icon('check')}Support for your everyday life</li></ul>
   ${btn('More About Us','/about-us/','outline')}
  </div>
 </div></section>

 <section class="section care-services" aria-labelledby="home-services-title"><div class="wrap">
  <div class="section-heading"><div>${eyebrow('Support for your everyday')}<h2 id="home-services-title">Small steps.<br> <span>A world of possibility.</span></h2></div><div><p>At home, in your community, or learning something new. Find support that fits your life.</p><a class="text-link" href="/services/">Explore all 11 services${icon('arrow')}</a></div></div>
  <div class="care-service-grid">${featured.map(s=>serviceCard(s,'home')).join('')}</div>
 </div></section>

 <section class="section care-start" aria-labelledby="home-start-title"><div class="wrap">
  <div class="care-section-center">${eyebrow('A good place to start')}<h2 id="home-start-title">How can we help you today?</h2><p>Wherever you are in your journey, there’s a simple next step.</p></div>
  <div class="care-entry-grid">${entryPoints.map(([symbol,title,copy,href,label],i)=>`<a class="care-entry" href="${href}"><span class="care-entry-top"><span class="care-entry-icon">${icon(symbol)}</span><span class="care-entry-number">0${i+1}</span></span><h3>${title}</h3><p>${copy}</p><span class="text-link">${label}${icon('arrow')}</span></a>`).join('')}</div>
 </div></section>

 <section class="section care-quality" aria-labelledby="home-quality-title"><div class="wrap care-quality-layout">
  <div class="care-quality-intro">${eyebrow('Quality & safeguards')}<h2 id="home-quality-title">Feel safe.<br> Be heard.<br> <span>Stay in control.</span></h2><p>Good support is about more than getting things done. It means respect, clear communication and having a voice in the things that affect you.</p>
   <div class="care-quality-links"><a href="/feedback/">Feedback & complaints ${icon('arrow')}</a><a href="/covid-19/#health-safety">Health & safety ${icon('arrow')}</a></div>
   <a class="care-ndis-card" href="/ndis-information/"><img src="/assets/ndis-provider-logo.png" alt="NDIS" width="186" height="99" loading="lazy" decoding="async"><span><strong>Registered NDIS provider</strong><small>I Care Group Services</small><span>Understand your NDIS options ${icon('arrow')}</span></span></a>
  </div>
  <div class="care-safeguards">${safeguards.map(([symbol,title,copy,href,label])=>`<article><span class="care-quality-icon">${icon(symbol)}</span><h3>${title}</h3><p>${copy}</p><a class="text-link" href="${href}">${label}${icon('arrow')}</a></article>`).join('')}</div>
 </div></section>

 <section class="section care-journey" aria-labelledby="home-steps-title"><div class="wrap">
  <div class="care-section-center">${eyebrow('Getting started')}<h2 id="home-steps-title">Let’s find your next step, together.</h2><p>No pressure to have it all worked out. Start with a conversation.</p></div>
  <div class="care-steps">${[
   ['01','Get in touch','Call us, send an enquiry or make a referral. Tell us what you would like help with.','phone'],
   ['02','Talk about your life','We’ll discuss your goals, preferences, location and the support that may suit you.','people'],
   ['03','Choose your next step','Ask questions and consider your options. Together, we can agree on a way forward.','leaf']
  ].map(([n,title,copy,symbol])=>`<article><div class="care-step-top"><span>${n}</span>${icon(symbol)}</div><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
  <div class="center care-journey-actions">${btn('Make a Referral','/make-a-referral/')}<a href="tel:${b.tel}">${icon('phone')}Or call ${b.phone}</a></div>
 </div></section>

 <section class="section care-local" aria-labelledby="home-local-title"><div class="wrap care-local-layout">
  <div class="care-local-photo">${image('outdoors.webp','Two adults sharing a conversation in a park','care-local-image')}<span>${icon('pin')}Niddrie, Melbourne</span></div>
  <div class="care-local-copy">${eyebrow('Here in your community')}<h2 id="home-local-title">NDIS support in Melbourne.<br> <span>Shaped around your life.</span></h2><p>Based at ${b.address}, our team welcomes enquiries from Niddrie and Melbourne.</p><p>Tell us your suburb and the support you are exploring. We’ll discuss what is suitable and available before you decide.</p><a class="text-link" href="/areas-we-serve/">Explore Our Local Areas ${icon('arrow')}</a>
   <div class="care-local-contact"><h3>Your local first step</h3><p>Explore <a href="/services/">our support services</a>, <a href="/make-a-referral/">make a referral</a> or contact the team.</p><a class="care-local-phone" href="tel:${b.tel}">${icon('phone')}${b.phone}</a><a href="mailto:${b.email}">${b.email}</a><p>${b.address}<br> ${b.hours}</p></div>
  </div>
 </div></section>

 <section class="section care-faq" aria-labelledby="home-faq-title"><div class="wrap faq-grid"><div>${eyebrow('A few helpful answers')}<h2 id="home-faq-title">A little clarity.<br> <span>A confident start.</span></h2><p>Questions are welcome. Here are some useful places to begin.</p><a class="text-link" href="/faqs/">Browse all FAQs${icon('arrow')}</a></div>${faqs()}</div></section>
 ${cta()}
 </div>`;
}
