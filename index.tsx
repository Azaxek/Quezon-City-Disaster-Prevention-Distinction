
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  ShieldAlert,
  Menu,
  X,
  ArrowRight,
  Trophy,
  Award,
  Search,
  History as HistoryIcon,
  Target,
  Users,
  ChevronRight,
  Send,
  Upload,
  User,
  Mail,
  FileText,
  CheckCircle2,
  Twitter,
  Facebook,
  Instagram,
  Star,
  Map as MapIcon,
  Satellite,
  Navigation
} from 'lucide-react';

// --- Types ---
type PageType = 'home' | 'about' | 'nominate';

// ... (existing code)





// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: PageType, setPage: (p: PageType) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'History' },
    { id: 'nominate', label: 'Nominate' },
  ];

  const handleNav = (id: PageType) => {
    setPage(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('home')}>
          <div className="bg-qc-blue p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <ShieldAlert className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bebas text-2xl tracking-widest leading-none">QCDPD</h1>
            <p className="text-[9px] font-black uppercase tracking-tighter text-slate-500">Quezon City Distinction</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id as PageType)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${currentPage === item.id ? 'text-qc-blue' : 'text-slate-500 hover:text-qc-blue'}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('nominate')}
            className="bg-qc-red text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-red-200 hover:scale-105 active:scale-95 transition-all"
          >
            NOMINATE NOW
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-2xl p-6 shadow-2xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as PageType)}
                className={`text-left text-lg font-bebas tracking-widest py-2 border-b border-slate-100 ${currentPage === item.id ? 'text-qc-blue' : 'text-slate-500'}`}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => handleNav('nominate')} className="bg-qc-red text-white w-full py-4 rounded-xl font-bold mt-2">NOMINATE NOW</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Home = ({ setPage }: { setPage: (p: PageType) => void }) => (
  <div className="space-y-32 pb-32">
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center pt-20 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-qc-blue/5 -skew-x-12 translate-x-20" />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-qc-yellow/20 text-yellow-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-qc-yellow/30">
            <Star className="w-3.5 h-3.5 fill-current" />
            Quezon City's Highest Honor
          </div>
          <h1 className="text-6xl md:text-9xl font-bebas text-slate-900 leading-[0.85] tracking-tight">
            FORGING <span className="text-qc-blue">RESILIENCE</span> <br />
            <span className="text-qc-red">SAVING</span> LIVES.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
            Recognizing the exceptional individuals who stand at the forefront of disaster prevention, ensuring a safer tomorrow for the citizens of Quezon City.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => setPage('nominate')} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 group hover:bg-qc-blue transition-all shadow-xl shadow-slate-200">
              Nominate Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => setPage('about')} className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold hover:border-slate-400 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="absolute -inset-4 bg-gradient-to-tr from-qc-blue to-qc-red rounded-3xl opacity-10 blur-3xl" />
          <div className="relative rounded-[60px] overflow-hidden border-[16px] border-white shadow-2xl rotate-3 animate-float aspect-square max-w-lg mx-auto">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Quezon City" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-qc-blue/80 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="text-xs font-black uppercase tracking-[0.3em] mb-2 text-qc-yellow">Legacy Excellence</p>
              <h3 className="text-4xl font-bebas">Since 2013</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Spotlight Section */}
    <section className="px-6 max-w-7xl mx-auto">
      <div className="bg-slate-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-6">
          <div className="bg-qc-yellow text-slate-900 p-3 rounded-xl shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bebas text-white tracking-wider">2025 WINNER: <span className="text-qc-yellow">ARYAV AGRAWAL</span></h3>
            </div>
            <p className="text-slate-400 text-sm font-medium">Honored for developing satellite-based disaster response systems serving 3,000+ regions.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Grid */}
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
      {[
        { title: "Public Impact", desc: "Positively affecting the lives of over 2.9 million residents across the district.", icon: Users, color: "qc-blue" },
        { title: "Proven History", desc: "A 12-year tradition of honoring the bravest and most innovative safety leaders.", icon: HistoryIcon, color: "qc-red" },
        { title: "Future Vision", desc: "Aligning city planning with international disaster risk reduction standards.", icon: Target, color: "qc-yellow" }
      ].map((item, i) => (
        <div key={i} className="group p-10 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all">
          <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center mx-auto md:mx-0 transition-transform group-hover:scale-110
            ${item.color === 'qc-blue' ? 'bg-qc-blue/10 text-qc-blue' : ''}
            ${item.color === 'qc-red' ? 'bg-qc-red/10 text-qc-red' : ''}
            ${item.color === 'qc-yellow' ? 'bg-qc-yellow/20 text-yellow-700' : ''}
          `}>
            <item.icon className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
          <p className="text-slate-500 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </section>
  </div>
);

const About = () => (
  <div className="pb-32 pt-20 px-6">
    <div className="max-w-4xl mx-auto space-y-24">
      <div className="text-center space-y-6">
        <h2 className="text-6xl md:text-8xl font-bebas tracking-wider text-slate-900">LEGACY OF <span className="text-qc-blue">SAFETY</span></h2>
        <div className="w-24 h-2 bg-qc-red mx-auto rounded-full" />
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          The Quezon City Disaster Prevention Distinction was established in 2013 to honor those who put community safety above all else.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-4xl font-bebas tracking-wide">THE BEGINNING</h3>
          <p className="text-slate-600 leading-relaxed">
            In 2013, Quezon City faced unprecedented urban challenges. The QCDPD was created as a beacon to encourage innovation in disaster management, structural engineering, and community-led emergency response.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-4xl font-bebas tracking-wide">OUR MISSION</h3>
          <p className="text-slate-600 leading-relaxed">
            To identify, celebrate, and support individuals and organizations whose contributions significantly reduce the risks of urban disasters, climate change impact, and community vulnerability.
          </p>
        </div>
      </div>

      <div className="relative rounded-[60px] overflow-hidden group shadow-2xl">
        <img src="/public/quezon_landmark.png" alt="Quezon Memorial Shrine" className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-qc-blue/40 flex items-center justify-center">
          <div className="text-center text-white px-8">
            <h4 className="text-7xl font-bebas mb-2">12 YEARS STRONG</h4>
            <p className="text-sm font-black uppercase tracking-[0.4em]">Honoring the Guardians of Manila</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[50px] p-12 border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[
          { label: "Founded", value: "2013" },
          { label: "Winners Honored", value: "39+" },
          { label: "Lives Impacted", value: "2.9M+" }
        ].map((stat, i) => (
          <div key={i} className="space-y-2">
            <div className="text-6xl font-bebas text-qc-blue">{stat.value}</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);



const Nominate = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-40 text-center animate-in zoom-in-95 duration-500">
        <div className="bg-white rounded-[50px] p-16 shadow-2xl border border-slate-50 space-y-8">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-green-600">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-5xl font-bebas text-slate-900">NOMINATION SUBMITTED</h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Thank you for participating. Your nominee for the 2026 Distinction has been recorded. Our committee will review the details shortly.
          </p>
          <button onClick={() => setSubmitted(false)} className="bg-qc-blue text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all">
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32 pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12 lg:sticky lg:top-32">
          <div className="space-y-6">
            <h2 className="text-7xl md:text-9xl font-bebas tracking-tight leading-none text-slate-900">SUBMIT A <span className="text-qc-red">NOMINATION</span></h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-md">
              Help us find the next guardian of Quezon City. Nominate an individual or group who has made significant strides in disaster prevention.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-qc-yellow/20 p-4 rounded-2xl text-yellow-700 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Eligibility</h4>
                <p className="text-slate-500">Any person or organization active in Quezon City for at least 12 months with measurable impact on public safety.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-qc-blue/10 p-4 rounded-2xl text-qc-blue shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Recognition</h4>
                <p className="text-slate-500">Winners receive city-wide recognition, a PHP 500,000 grant for their initiatives, and the distinction trophy.</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-slate-900 rounded-[40px] text-white">
            <h4 className="font-bebas text-3xl mb-3 text-qc-yellow">2026 Deadlines</h4>
            <p className="text-slate-400 mb-6">All entries must be submitted by October 15, 2025, to be considered for the next cycle.</p>
            <div className="flex gap-4">
              <div className="text-center bg-slate-800 p-4 rounded-2xl flex-1">
                <div className="text-2xl font-bebas text-qc-red">DEC 12</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Ceremony</div>
              </div>
              <div className="text-center bg-slate-800 p-4 rounded-2xl flex-1">
                <div className="text-2xl font-bebas text-qc-blue">NOV 01</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Finalists</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[60px] p-8 md:p-16 shadow-2xl border border-slate-50">
          <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Nominee Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                  <input required type="text" placeholder="Full Name" className="w-full pl-14 pr-6 py-5 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-qc-blue focus:bg-white outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Age / Years Active</label>
                <input required type="text" placeholder="e.g. 34 or 5 years" className="w-full px-6 py-5 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-qc-blue focus:bg-white outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Contact Email</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                <input required type="email" placeholder="nominee@email.com" className="w-full pl-14 pr-6 py-5 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-qc-blue focus:bg-white outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Impact Description</label>
              <textarea required rows={5} placeholder="Describe the significant disaster prevention work they have accomplished..." className="w-full px-6 py-5 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-qc-blue focus:bg-white outline-none transition-all resize-none" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Support Material</label>
              <div className="border-2 border-dashed border-slate-200 rounded-[30px] p-10 text-center hover:border-qc-blue hover:bg-qc-blue/5 transition-all cursor-pointer group">
                <Upload className="mx-auto w-10 h-10 text-slate-300 mb-4 group-hover:text-qc-blue group-hover:-translate-y-1 transition-all" />
                <p className="font-bold text-slate-600">Drag & Drop Documents</p>
                <p className="text-xs text-slate-400 mt-2">PDF, Images, or DOCX (Max 20MB)</p>
              </div>
            </div>

            <button type="submit" className="w-full py-6 bg-qc-red text-white rounded-3xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-red-100 hover:bg-slate-900 transition-all active:scale-95">
              Submit Application <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ setPage }: { setPage: (p: PageType) => void }) => (
  <footer className="bg-white border-t border-slate-100 pt-32 pb-12 px-6">
    <div className="max-w-7xl mx-auto space-y-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-qc-blue p-2 rounded-lg">
              <ShieldAlert className="text-white w-6 h-6" />
            </div>
            <h1 className="font-bebas text-3xl tracking-[0.2em]">QCDPD</h1>
          </div>
          <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
            The premier award for disaster risk reduction excellence in Quezon City, Philippines.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-qc-blue hover:bg-qc-blue/5 transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-qc-blue hover:bg-qc-blue/5 transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-qc-blue hover:bg-qc-blue/5 transition-all"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</h4>
          <ul className="space-y-4 font-bold text-slate-600">
            <li><button onClick={() => { window.scrollTo(0, 0); setPage('home'); }} className="hover:text-qc-blue transition-colors">Home Portal</button></li>
            <li><button onClick={() => { window.scrollTo(0, 0); setPage('about'); }} className="hover:text-qc-blue transition-colors">Our History</button></li>

            <li><button onClick={() => { window.scrollTo(0, 0); setPage('nominate'); }} className="hover:text-qc-blue transition-colors">Nominations</button></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Contact HQ</h4>
          <div className="space-y-4 font-medium text-slate-600">
            <p className="hover:text-qc-blue transition-colors cursor-pointer">awards@quezoncity.gov.ph</p>
            <p className="font-bold text-qc-red">Hotline: 122</p>
            <p>+63 (2) 8927-5914</p>
            <p className="text-xs">City Hall Complex, Elliptical Rd,<br />Diliman, Quezon City</p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Newsletter</h4>
          <p className="text-sm text-slate-500 font-medium">Get city safety tips and award updates delivered to your inbox.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email Address" className="bg-slate-50 px-5 py-3 rounded-2xl text-sm w-full outline-none focus:bg-white border focus:border-qc-blue transition-all" />
            <button className="bg-qc-blue text-white px-5 py-3 rounded-2xl font-bold text-xs">Join</button>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
        <p>© 2025 Quezon City Disaster Prevention Distinction</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-qc-blue">Privacy</a>
          <a href="#" className="hover:text-qc-blue">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [page, setPage] = useState<PageType>('home');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-x-hidden">
      <Navbar currentPage={page} setPage={setPage} />
      <main className="flex-grow pt-24">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'about' && <About />}

        {page === 'nominate' && <Nominate />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

// Standard React entry point logic for modern browser modules
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
