// ===== یہاں اپنا واٹس اپ نمبر لکھیں (ملک کے کوڈ کے ساتھ، بغیر + اور صفر کے) مثال: 923001234567 =====
const WA_NUMBER = "923485669660";
const ACADEMY = "الرحیم آن لائن قرآن اکیڈمی";
const wa = (t) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;
const pages = [["index.html","ہوم"],["courses.html","کورسز"],["teachers.html","اساتذہ"],["about.html","ہمارے بارے میں"],["enroll.html","داخلہ"],["contact.html","رابطہ"]];
const cur = location.pathname.split("/").pop() || "index.html";
document.body.insertAdjacentHTML("afterbegin", `<header><div class="wrap"><a class="logo" href="index.html">📖 الرحیم <span>آن لائن قرآن اکیڈمی</span></a><nav>${pages.map(([h,n])=>`<a href="${h}" class="${h===cur?'on':''}">${n}</a>`).join("")}</nav></div></header>`);
document.body.insertAdjacentHTML("beforeend", `<footer><div class="wrap"><p>© ${new Date().getFullYear()} ${ACADEMY} — جملہ حقوق محفوظ ہیں</p><p>داخلہ و معلومات کے لیے <a href="${wa('السلام علیکم! مجھے داخلے کے بارے میں معلومات چاہییں۔')}">واٹس اپ پر رابطہ کریں</a></p></div></footer><a class="wa-float" href="${wa('السلام علیکم! مجھے آپ کی اکیڈمی کے بارے میں معلومات چاہییں۔')}" aria-label="WhatsApp">💬</a>`);
document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa(a.dataset.wa));
const f=document.getElementById("enrollForm");
if(f)f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f);
location.href=wa(`السلام علیکم! میں داخلہ لینا چاہتا/چاہتی ہوں۔\nنام: ${d.get("name")}\nعمر: ${d.get("age")}\nملک/شہر: ${d.get("city")}\nکورس: ${d.get("course")}\nپسندیدہ وقت: ${d.get("time")}`)});
