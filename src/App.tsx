import { AnimatePresence, motion } from 'framer-motion'
import { 
  ArrowUpRight, BriefcaseBusiness, Code2, Download, ExternalLink, 
  GraduationCap, Mail, MapPin, Menu, X, Sparkles, Users, Terminal, ChevronRight 
} from 'lucide-react'
import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

type BrandIconProps = { size?: number }
function GithubIcon({ size = 17 }: BrandIconProps) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 8.08c.97 0 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.12 3.06.73.81 1.17 1.84 1.17 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.24c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg> }
function LinkedinIcon({ size = 17 }: BrandIconProps) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 .02.78.02 1.76v20.48c0 .98.78 1.76 1.76 1.76h20.44c.98 0 1.78-.78 1.78-1.76V1.76C24 .78 23.2 0 22.22 0Z" /></svg> }

const GITHUB='https://github.com/mohdamirhasan'
const LINKEDIN='https://www.linkedin.com/in/amir-hasan-web-developer/'
const EMAIL='meetamirhasan@gmail.com'

const skills: Array<[string, string[]]> = [
  ['Languages',['C','Java','Python','JavaScript','TypeScript']],
  ['Frontend',['React','HTML','CSS','Tailwind CSS']],
  ['Backend',['Node.js','Express.js','Flask']],
  ['Database',['MongoDB']],
  ['Engineering',['REST APIs','JWT','OpenMP','DSA']],
  ['Tools',['Git','GitHub']],
]

const projects = [
  {slug:'ngo-connect',title:'NGO Connect',label:'Featured • Team Lead',description:'A platform that connects people reporting local issues with NGOs that can help. Users submit a report with a picture and location; the platform routes it toward relevant NGO and issue categories.',role:'Team Lead · Full-Stack Developer',stack:['React','TypeScript','Node.js','Express.js','MongoDB','JWT'],links:[['Frontend', 'https://github.com/mohdamirhasan/ngo-connect-frontend'],['Backend','https://github.com/mohdamirhasan/ngo-connect-backend']],features:['Issue reporting with images and location','Category-based NGO matching','Authentication and protected routes','Backend API, models, controllers and middleware','Team mentoring and technical direction']},
  {slug:'devtrack',title:'DevTrack',label:'Featured • Solo • In Development',description:'A project management platform I am building independently to organize projects, tasks, priorities and progress through a modern developer-focused workflow.',role:'Solo Developer',stack:['React','TypeScript','Vite','Tailwind CSS','React Router','TanStack Query'],links:[['GitHub','https://github.com/mohdamirhasan/devtrack']],features:['Project and task management','Status, priority and progress workflows','Responsive dashboard experience','Data fetching with TanStack Query','Actively evolving architecture and features']},
]

const moreProjects = [
 {title:'Vector Calculator',description:'An interactive web utility for common vector calculations including addition, subtraction, dot product, cross product.',stack:['HTML','CSS','JavaScript'],github:'https://github.com/mohdamirhasan/Vector-Calculator',demo:'https://mohdamirhasan.github.io/Vector-Calculator/'},
 {title:'Weather Forecast App',description:'An interactive weather webpage focused on searching and presenting weather information through a clean, responsive interface.',stack:['HTML','CSS','JavaScript'],github:'https://github.com/mohdamirhasan/Weather-Forecast-App',demo:'https://mohdamirhasan.github.io/Weather-Forecast-App/'},
]

function Nav({ onRequestResume }: { onRequestResume: () => void }){
 const [open,setOpen]=useState(false); const location=useLocation()
 const items=[['About','/#about'],['Skills','/#skills'],['Projects','/#projects'],['Experience','/#experience'],['Education','/#education'],['Contact','/#contact']]
 useEffect(()=>setOpen(false),[location.pathname,location.hash])
 return <header className="nav-wrap"><nav className="nav shell"><Link to="/" className="brand"><span>AH</span><strong>Mohd. Amir Hasan</strong></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><div className={`nav-links ${open?'show':''}`}>{items.map(([label,to])=><a key={label} href={to}>{label}</a>)}</div></nav></header>
}

function Reveal({children,className='' }:{children:React.ReactNode,className?:string}){return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,ease:'easeOut'}}>{children}</motion.div>}
function SectionTitle({eyebrow,title,copy}:{eyebrow:string,title:string,copy?:string}){return <div className="section-head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
function Home({ onRequestResume, resumeRequested, onResumeDownloaded }: { onRequestResume: () => void; resumeRequested: boolean; onResumeDownloaded: () => void }){return <>
 <Nav onRequestResume={onRequestResume}/>
 <main>
  <section className="hero shell" id="top"><div className="hero-grid"><div className="hero-copy"><div className="availability"><span></span> Open to remote internships & freelance</div><p className="kicker">FULL-STACK DEVELOPER · SOFTWARE DEVELOPER</p><h1>Building modern web experiences with <em>code, creativity,</em> and purpose.</h1><p className="hero-text">I’m <strong>Mohd. Amir Hasan</strong>, a Computer Applications student at Aligarh Muslim University who enjoys turning ideas into practical software and learning by building.</p><div className="hero-actions"><a className="btn primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><button className="btn secondary" type="button" onClick={onRequestResume}><Download size={17}/> Download CV</button></div><div className="social-row"><a href={GITHUB} target="_blank"><GithubIcon size={17}/> GitHub</a><a href={LINKEDIN} target="_blank"><LinkedinIcon size={17}/> LinkedIn</a><a href={`mailto:${EMAIL}`}><Mail size={17}/> Email</a></div></div><div className="hero-visual"><div className="orb orb-a"/><div className="orb orb-b"/><div className="code-card"><div className="window-bar"><i/><i/><i/><span>amir.ts</span></div><pre><code><span className="muted">const</span> developer = {'{'}{`\n`}  name: <span className="cyan">"Amir Hasan"</span>,{`\n`}  focus: [<span className="cyan">"full-stack"</span>,{`\n`}          <span className="cyan">"software"</span>],{`\n`}  learning: <span className="cyan">"DSA"</span>,{`\n`}  build: <span className="purple">true</span>{`\n`}{'}'}</code></pre><div className="code-status"><span>●</span> currently building</div></div><div className="float-chip chip-one"><Code2 size={15}/> React · TypeScript</div><div className="float-chip chip-two"><Terminal size={15}/> DSA · OpenMP</div></div></div></section>

  <section className="about section shell" id="about"><Reveal><SectionTitle eyebrow="01 / About" title="A developer who learns by building." copy="I’m currently pursuing a B.Sc. (Hons.) in Computer Applications at Aligarh Muslim University. My focus is full-stack web development and software engineering, while I continuously strengthen my foundations through DSA and hands-on projects."/></Reveal><div className="about-grid"><Reveal className="about-card"><div className="about-icon"><Sparkles/></div><h3>Build. Learn. Lead.</h3><p>I like working across the stack—from interfaces and APIs to data models and application logic. I also enjoy helping other developers learn by building alongside them.</p><div className="mini-stats"><div><b>2024</b><span>Started B.Sc.</span></div><div><b>2025</b><span>Joined CSS Technical Team</span></div><div><b>2026</b><span>Co-Lead, Web Development</span></div></div></Reveal><Reveal className="principles"><div className="principle"><span>01</span><div><b>Practical engineering</b><p>Prefer projects that solve a real problem or teach a transferable engineering skill.</p></div></div><div className="principle"><span>02</span><div><b>Strong foundations</b><p>Actively learning DSA and practicing problem solving alongside application development.</p></div></div><div className="principle"><span>03</span><div><b>Team growth</b><p>Enjoy mentoring teammates, sharing fundamentals and turning ideas into working projects.</p></div></div></Reveal></div></section>

  <section className="skills section shell" id="skills"><Reveal><SectionTitle eyebrow="02 / Skills" title="Tools I use to turn ideas into software."/></Reveal><div className="skill-grid">{skills.map(([title,list],i)=><Reveal key={title} className="skill-card"><div className="skill-number">0{i+1}</div><h3>{title}</h3><div className="tags">{list.map(s=><span key={s}>{s}</span>)}</div></Reveal>)}</div></section>

  <section className="projects section shell" id="projects"><Reveal><SectionTitle eyebrow="03 / Selected Work" title="Projects with a purpose." copy="A mix of team-led, solo and smaller projects that reflect how I learn, build and solve problems."/></Reveal><div className="featured-projects">{projects.map((p,i)=><Reveal key={p.slug}><Link to={`/projects/${p.slug}`} className="project-feature"><div className="project-glow"/><div className="project-top"><span className="project-label">{p.label}</span><ArrowUpRight/></div><div><h3>{p.title}</h3><p>{p.description}</p></div><div className="project-bottom"><div className="tags">{p.stack.slice(0,6).map(s=><span key={s}>{s}</span>)}</div><span className="case-link">View case study <ChevronRight size={16}/></span></div></Link></Reveal>)}</div><div className="more-head"><h3>More projects</h3><span>Small builds, useful experiments.</span></div><div className="more-grid">{moreProjects.map(p=><Reveal key={p.title} className="small-project"><div className="small-project-top"><Code2/><span>Web Project</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="small-links"><a href={p.github} target="_blank">GitHub <GithubIcon size={14}/></a><a href={p.demo} target="_blank">Live Demo <ExternalLink size={14}/></a></div></Reveal>)}</div></section>

  <section className="experience section shell" id="experience"><Reveal><SectionTitle eyebrow="04 / Experience" title="Leadership through technology."/></Reveal><div className="timeline"><Reveal className="timeline-item"><div className="timeline-dot"/><div className="timeline-meta"><span>2026 — Present</span><span>Aligarh Muslim University</span></div><div className="timeline-body"><h3>Co-Lead, Web Development <span>@ Computer Science Society</span></h3><p>Guide a web development team alongside the senior Web Development Lead, helping members learn the fundamentals and turn them into practical projects.</p><ul><li>Joined CSS in January 2025 as a Web Development Team member.</li><li>Joined the Technical Team in October 2025 in parallel.</li><li>Organized AMUHACKS 4.0 and AMUHACKS 5.0, CSS's annual technical event featuring competitions including a national-level hackathon.</li></ul></div></Reveal><Reveal className="timeline-item"><div className="timeline-dot"/><div className="timeline-meta"><span>2025 — Present</span><span>Independent</span></div><div className="timeline-body"><h3>Freelance Web Development</h3><p>Built a lightweight web page for a real client as an early freelance-style project, gaining practical experience translating a real-world request into a usable interface.</p></div></Reveal></div></section>

  <section className="education section shell" id="education"><Reveal><SectionTitle eyebrow="05 / Education" title="Learning with a strong foundation."/></Reveal><Reveal className="education-card"><div className="edu-icon"><GraduationCap/></div><div><span className="eyebrow">August 2024 — Expected 2028</span><h3>B.Sc. (Hons.) Computer Applications</h3><p>Aligarh Muslim University</p><div className="edu-note">Currently strengthening software development fundamentals, web engineering and data structures & algorithms.</div></div></Reveal></section>

  <section className="contact section shell" id="contact"><Reveal className="contact-box"><div className="contact-copy"><span className="eyebrow">06 / Contact</span><h2>Have an idea worth building?</h2><p>I’m open to remote internships and freelance opportunities. If you have a project, role or collaboration in mind, let’s talk.</p><div className="contact-details"><a href={`mailto:${EMAIL}`}><Mail size={17}/>{EMAIL}</a><span><MapPin size={17}/>India</span></div><div className="contact-actions"><a className="btn secondary" href={`mailto:${EMAIL}?subject=Portfolio%20Enquiry`}>Email me <ArrowUpRight size={17}/></a><a className="btn secondary" href={LINKEDIN} target="_blank"><LinkedinIcon size={17}/> Connect on LinkedIn</a></div></div><ContactForm resumeRequested={resumeRequested} onResumeDownloaded={onResumeDownloaded}/></Reveal></section>
 </main><Footer onRequestResume={onRequestResume}/></>}

function ProjectPage({project, onRequestResume}:{project:typeof projects[number]; onRequestResume: () => void}){return <><Nav onRequestResume={onRequestResume}/><main className="case-page shell"><Link to="/#projects" className="back">← Back to projects</Link><div className="case-hero"><span className="project-label">{project.label}</span><h1>{project.title}</h1><p>{project.description}</p><div className="case-links">{project.links.map(([label,url])=><a className="btn secondary" href={url} target="_blank" key={label}>{label==='GitHub'?<GithubIcon size={16}/>:<ExternalLink size={16}/>} {label}</a>)}</div></div><div className="case-grid"><div><div className="case-section"><span className="eyebrow">01 / Role</span><h2>{project.role}</h2><p>{project.slug==='ngo-connect'?'I led a four-member team, taught web development fundamentals and contributed across the stack, with particular ownership of backend development.':'I am building DevTrack independently, iterating on the product and architecture as I learn and add features.'}</p></div><div className="case-section"><span className="eyebrow">02 / What I built</span><div className="feature-list">{project.features.map((f,i)=><div key={f}><span>0{i+1}</span><b>{f}</b></div>)}</div></div></div><aside className="case-aside"><span className="eyebrow">Technology</span><div className="tags">{project.stack.map(s=><span key={s}>{s}</span>)}</div><div className="aside-note"><Users size={18}/><div><b>{project.slug==='ngo-connect'?'Team project':'Solo project'}</b><p>{project.slug==='ngo-connect'?'4 members · You led and mentored the team.':'Built independently · Active development.'}</p></div></div></aside></div></main><Footer onRequestResume={onRequestResume}/></>}

function ContactForm({
  resumeRequested,
  onResumeDownloaded,
}: {
  resumeRequested: boolean;
  onResumeDownloaded: () => void;
}){
 const [sent,setSent]=useState(false)
 const submit=(e:FormEvent<HTMLFormElement>)=>{
   e.preventDefault()
   const fd=new FormData(e.currentTarget)
   const name=String(fd.get('name')||'')
   const email=String(fd.get('email')||'')
   const message=String(fd.get('message')||'')
   if(resumeRequested){
     const link=document.createElement('a')
     link.href='/resume.pdf'
     link.download='Mohd-Amir-Hasan-Resume.pdf'
     document.body.appendChild(link)
     link.click()
     link.remove()
     onResumeDownloaded()
   }
   window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
   setSent(true)
 }
 return <form className="contact-form" onSubmit={submit}>
   {resumeRequested && <div className="form-note">Please complete the form to unlock your CV download.</div>}
   <div className="form-row"><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label></div>
   <label>Message<textarea name="message" required rows={5} placeholder="Tell me a little about what you want to build..."/></label>
   <button className="btn primary" type="submit">{resumeRequested ? 'Submit & Download CV' : 'Send message'} <ArrowUpRight size={17}/></button>
   {sent&&<span className="form-note">Your email client should open with the message prepared. If it doesn't, use the email address beside the form.</span>}
 </form>
}

function Footer({ onRequestResume }: { onRequestResume: () => void }){return <footer><div className="shell footer-inner"><div><Link to="/" className="brand"><span>AH</span><strong>Mohd. Amir Hasan</strong></Link><p>Full-Stack Developer · Software Developer</p></div><div className="footer-links"><a href={GITHUB} target="_blank">GitHub</a><a href={LINKEDIN} target="_blank">LinkedIn</a><a href={`mailto:${EMAIL}`}>Email</a><button className="footer-resume" type="button" onClick={onRequestResume}>Resume</button></div><div className="copyright">© {new Date().getFullYear()} Mohd. Amir Hasan</div></div></footer>}

export default function App(){
 const [resumeRequested,setResumeRequested]=useState(false)
 const requestResume=()=>{
   setResumeRequested(true)
   document.getElementById('contact')?.scrollIntoView({behavior:'smooth',block:'center'})
 }
 return <><AnimatePresence mode="wait"><Routes>
   <Route path="/" element={<Home onRequestResume={requestResume} resumeRequested={resumeRequested} onResumeDownloaded={()=>setResumeRequested(false)}/>} />
   <Route path="/projects/ngo-connect" element={<ProjectPage project={projects[0]} onRequestResume={requestResume}/>} />
   <Route path="/projects/devtrack" element={<ProjectPage project={projects[1]} onRequestResume={requestResume}/>} />
 </Routes></AnimatePresence><Analytics /></>
}
