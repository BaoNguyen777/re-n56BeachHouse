"use client";

import { ArrowDownRight, ArrowUpRight, BedDouble, CalendarDays, Check, ChevronRight, Coffee, MapPin, Menu, Sparkles, Star, Waves, X } from "lucide-react";
import { useState } from "react";

const bookingUrl = "https://www.booking.com/hotel/vn/n56-homestay-grandworld-phu-quoc.en-gb.html";

const photos = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/793814999.jpg?k=f0120541444e1e38c13f1811b4e38bc59fb327e685b51cc0ae71ede74256076f&o=",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1400&q=85",
];

const rooms = [
  { name: "DOUBLE + BALCONY", meta: "18 m² · 2 guests · pool view", price: "$30", image: photos[0], tag: "MOST WANTED" },
  { name: "DELUXE TWIN / DOUBLE", meta: "20 m² · 2 guests · city view", price: "$38", image: photos[2], tag: "GOOD ENERGY" },
  { name: "SUPERIOR FAMILY", meta: "25 m² · up to 6 guests · city view", price: "$42", image: photos[3], tag: "SQUAD MODE" },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [room, setRoom] = useState(0);

  return (
    <main className="noise overflow-hidden">
      <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-7">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border-2 border-[#11110f] bg-[#f7f1e7]/90 px-4 py-3 shadow-soft backdrop-blur-md">
          <a href="#top" className="flex items-center gap-2 font-black tracking-[-.06em]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#d8ff4f] text-sm">N56</span> BEACH HOUSE</a>
          <div className="hidden items-center gap-7 text-xs font-black uppercase tracking-[.15em] md:flex">
            <a href="#stay">Stay</a><a href="#rooms">Rooms</a><a href="#vibe">Vibe</a><a href="#location">Location</a>
          </div>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#11110f] px-5 py-3 text-xs font-black uppercase tracking-[.12em] text-white md:block">Book your stay ↗</a>
          <button onClick={() => setMenu(!menu)} className="grid h-10 w-10 place-items-center rounded-full bg-[#11110f] text-white md:hidden" aria-label="menu">{menu ? <X size={18}/> : <Menu size={18}/>}</button>
        </div>
        {menu && <div className="mx-auto mt-2 max-w-[1400px] rounded-3xl border-2 border-[#11110f] bg-[#d8ff4f] p-5 font-black uppercase md:hidden"><div className="grid gap-4"><a href="#stay" onClick={()=>setMenu(false)}>Stay</a><a href="#rooms" onClick={()=>setMenu(false)}>Rooms</a><a href="#vibe" onClick={()=>setMenu(false)}>Vibe</a><a href="#location" onClick={()=>setMenu(false)}>Location</a><a href={bookingUrl} target="_blank" rel="noreferrer">Book ↗</a></div></div>}
      </nav>

      <section id="top" className="grid-paper relative min-h-screen px-4 pb-10 pt-28 md:px-8 md:pt-36">
        <div className="mx-auto grid max-w-[1400px] items-end gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[.2em] md:text-xs"><span className="rounded-full border-2 border-[#11110f] bg-[#d8ff4f] px-4 py-2">Grand World · Phu Quoc</span><span className="rounded-full border-2 border-[#11110f] bg-white px-4 py-2">Beachfront energy</span></div>
            <h1 className="max-w-5xl text-[clamp(4.5rem,13vw,12.5rem)] font-black uppercase leading-[.76] tracking-[-.09em]">Stay<br/><span className="text-[#ff735c]">weird.</span><br/>Sleep<br/><span className="text-[#4bcde9]">happy.</span></h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base font-bold leading-6 md:text-lg">N56 Beach House is your low-key base inside Grand World — close to the beach, bright lights and late-night island plans.</p>
              <a href="#rooms" className="group flex w-fit items-center gap-3 rounded-full bg-[#11110f] px-6 py-4 text-sm font-black uppercase text-white">Pick a room <ArrowDownRight size={18} className="transition-transform group-hover:rotate-45"/></a>
            </div>
          </div>
          <div className="relative min-h-[430px] lg:min-h-[590px]">
            <div className="absolute -left-3 top-5 z-10 rounded-full border-2 border-[#11110f] bg-[#ff735c] px-5 py-3 text-xs font-black uppercase rotate-[-7deg] float">No boring stays ✦</div>
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border-2 border-[#11110f] bg-[#11110f] shadow-soft">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{backgroundImage:`url("${photos[0]}")`}} />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-3xl border-2 border-white/50 bg-black/35 p-5 text-white backdrop-blur-md"><div><p className="text-[10px] font-black uppercase tracking-[.2em] opacity-80">Room 01</p><p className="mt-1 text-2xl font-black tracking-tight">Balcony + pool view</p></div><Waves/></div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1400px] overflow-hidden border-y-2 border-[#11110f] py-4"><div className="marquee flex gap-10 text-2xl font-black uppercase tracking-[-.04em] md:text-4xl">PHU QUOC ✦ GRAND WORLD ✦ BEACH MODE ✦ N56 BEACH HOUSE ✦ PHU QUOC ✦ GRAND WORLD ✦ BEACH MODE ✦ N56 BEACH HOUSE ✦</div></div>
      </section>

      <section id="stay" className="bg-[#11110f] px-4 py-24 text-[#f7f1e7] md:px-8 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><span className="rounded-full bg-[#d8ff4f] px-4 py-2 text-xs font-black uppercase text-[#11110f]">Why N56?</span><h2 className="mt-7 text-6xl font-black uppercase leading-[.86] tracking-[-.07em] md:text-8xl">Small<br/>house.<br/><span className="text-[#6ee7ff]">Big mood.</span></h2></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[['9.4','Location score','Excellent spot near Bai Dai'],['8.7','Guest rating','47 real reviews on Booking.com'],['10.0','Wi‑Fi','Fast enough for a workcation'],['5 min','To Bai Dai Beach','Walk out, hit the sand']].map(([big,title,desc],i)=><div key={title} className={`rounded-[2rem] border border-white/15 p-6 ${i===0?'bg-[#d8ff4f] text-[#11110f]':''}`}><div className="text-5xl font-black tracking-[-.06em]">{big}</div><div className="mt-7 font-black uppercase tracking-[.12em]">{title}</div><p className="mt-2 text-sm opacity-65">{desc}</p></div>)}
            </div>
          </div>
          <div className="mt-16 grid gap-3 md:grid-cols-4"><Feature icon={<Waves/>} text="Beachfront"/><Feature icon={<Sparkles/>} text="Sauna"/><Feature icon={<BedDouble/>} text="Family rooms"/><Feature icon={<Coffee/>} text="Takeaway breakfast"/></div>
        </div>
      </section>

      <section id="rooms" className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[.2em]">01 / Choose your base</p><h2 className="mt-3 text-6xl font-black uppercase leading-[.8] tracking-[-.08em] md:text-9xl">Room<br/><span className="text-[#ff735c]">check.</span></h2></div><p className="max-w-sm font-bold">Simple rooms, strong AC, private bathrooms and the kind of balcony you actually use.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
            <div className="flex flex-col gap-2">{rooms.map((r,i)=><button key={r.name} onClick={()=>setRoom(i)} className={`group rounded-[1.8rem] border-2 border-[#11110f] p-5 text-left transition ${room===i?'bg-[#d8ff4f]':'bg-white hover:bg-[#ff735c]'}`}><div className="flex items-center justify-between"><span className="text-[10px] font-black uppercase tracking-[.18em]">0{i+1} / {r.tag}</span><ChevronRight size={20} className="transition-transform group-hover:translate-x-1"/></div><div className="mt-10 text-xl font-black uppercase tracking-[-.03em] md:text-2xl">{r.name}</div><p className="mt-2 text-sm font-bold opacity-65">{r.meta}</p></button>)}</div>
            <div className="relative min-h-[480px] overflow-hidden rounded-[2.4rem] border-2 border-[#11110f] bg-[#11110f] text-white"><div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{backgroundImage:`url("${rooms[room].image}")`}}/><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/><div className="absolute left-5 top-5 rounded-full bg-[#d8ff4f] px-4 py-2 text-[10px] font-black uppercase text-[#11110f]">{rooms[room].tag}</div><div className="absolute bottom-6 left-6 right-6"><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.18em] opacity-70">from</p><p className="text-5xl font-black tracking-[-.06em]">{rooms[room].price}<span className="text-base tracking-normal"> / night*</span></p></div><a href={bookingUrl} target="_blank" rel="noreferrer" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-[#11110f] hover:bg-[#d8ff4f]"><ArrowUpRight/></a></div></div></div>
          </div>
          <p className="mt-4 text-[11px] font-bold opacity-50">*Indicative Booking.com price observed for selected 2026 dates; live price and availability change by dates, guests and offers.</p>
        </div>
      </section>

      <section id="vibe" className="bg-[#ff735c] px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-10 lg:grid-cols-2"><div><p className="text-xs font-black uppercase tracking-[.2em]">02 / The vibe</p><h2 className="mt-4 text-6xl font-black uppercase leading-[.78] tracking-[-.08em] md:text-9xl">Pool<br/>hair.<br/><span className="text-white">Don't care.</span></h2></div><div className="grid gap-4"><div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] border-2 border-[#11110f]"><div className="h-full w-full bg-cover bg-center" style={{backgroundImage:`url("${photos[1]}")`}}/></div><div className="grid grid-cols-2 gap-4"><div className="rounded-[1.7rem] border-2 border-[#11110f] bg-[#d8ff4f] p-6"><Star fill="currentColor"/><p className="mt-8 text-3xl font-black tracking-[-.05em]">9.4/10</p><p className="mt-1 text-xs font-black uppercase">location love</p></div><div className="rounded-[1.7rem] border-2 border-[#11110f] bg-white p-6"><MapPin/><p className="mt-8 text-3xl font-black tracking-[-.05em]">Bãi Dài</p><p className="mt-1 text-xs font-black uppercase">Grand World side</p></div></div></div></div>
        </div>
      </section>

      <section id="location" className="grid-paper px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr]"><div><p className="text-xs font-black uppercase tracking-[.2em]">03 / Location</p><h2 className="mt-4 max-w-4xl text-6xl font-black uppercase leading-[.82] tracking-[-.08em] md:text-9xl">Your island<br/><span className="text-[#4bcde9]">basecamp.</span></h2><p className="mt-8 max-w-xl text-lg font-bold leading-7">N56 Beach House sits in the Bãi Dài / Grand World area of Phu Quoc. Bai Dai Beach is around a 5-minute walk away, with Corona Casino about 1.5 km and Vinpearl Land about 1.9 km away.</p></div><div className="rounded-[2.5rem] border-2 border-[#11110f] bg-[#11110f] p-2 text-white"><div className="flex h-full min-h-[400px] flex-col justify-between rounded-[2rem] bg-[#d8ff4f] p-7 text-[#11110f]"><MapPin size={34}/><div><p className="text-xs font-black uppercase tracking-[.2em]">Find us</p><p className="mt-2 text-3xl font-black tracking-[-.05em]">Bãi Dài, Gành Dầu<br/>Phu Quoc, Vietnam</p><a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#11110f] px-5 py-3 text-xs font-black uppercase text-white">Open property ↗</a></div></div></div></div>
          <div className="mt-20 grid gap-3 border-y-2 border-[#11110f] py-6 md:grid-cols-3"><Mini label="Check-in" value="14:00 — 23:00"/><Mini label="Check-out" value="08:00 — 12:00"/><Mini label="Language" value="English + Vietnamese"/></div>
        </div>
      </section>

      <section className="bg-[#6ee7ff] px-4 py-24 md:px-8 md:py-32"><div className="mx-auto max-w-[1400px] text-center"><div className="mx-auto max-w-5xl text-6xl font-black uppercase leading-[.8] tracking-[-.08em] md:text-[9rem]">Book the<br/><span className="text-white">good kind</span><br/>of chaos.</div><p className="mx-auto mt-8 max-w-lg font-bold">Rates and availability are live on Booking.com. Pick your dates, check the room and lock in the island plan.</p><a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#11110f] bg-[#d8ff4f] px-8 py-5 text-sm font-black uppercase shadow-[6px_6px_0_#11110f] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Book N56 <ArrowUpRight/></a></div></section>

      <footer className="bg-[#11110f] px-4 py-8 text-white md:px-8"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 text-xs font-black uppercase tracking-[.12em] md:flex-row md:items-center"><div>N56 BEACH HOUSE © 2026</div><div className="opacity-50">Grand World · Phu Quoc · Vietnam</div><a href="#top" className="rounded-full bg-white px-4 py-2 text-[#11110f]">Back to top ↑</a></div></footer>
    </main>
  );
}

function Feature({icon,text}:{icon:React.ReactNode;text:string}){return <div className="flex items-center gap-4 rounded-2xl border border-white/15 p-5"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#d8ff4f] text-[#11110f]">{icon}</span><span className="font-black uppercase">{text}</span></div>}
function Mini({label,value}:{label:string;value:string}){return <div><p className="text-[10px] font-black uppercase tracking-[.2em] opacity-50">{label}</p><p className="mt-2 text-xl font-black">{value}</p></div>}
