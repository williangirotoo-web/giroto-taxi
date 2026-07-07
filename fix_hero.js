const fs = require("fs");
const path = "app/page.tsx";
let src = fs.readFileSync(path, "utf8");
const oldBlock = [
'            <div className="hidden md:grid grid-cols-2 gap-4">',
'              {[',
'                { value: "30 anos", label: "Servindo Umuarama" },',
'                { value: "8", label: "Motoristas experientes" },',
'                { value: "24h", label: "Disponivel sempre" },',
'                { value: "R$ 25", label: "Corrida urbana" },',
'              ].map(s => (',
'                <div key={s.value} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">',
'                  <p className="text-3xl font-extrabold text-yellow-400 mb-1">{s.value}</p>',
'                  <p className="text-sm text-gray-400">{s.label}</p>',
'                </div>',
'              ))}'
].join("\n");
const newBlock = [
'            <div className="hidden md:block">',
'              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">',
'                <Image',
'                  src="/fotos/f10-corolla-rodoviaria-umuarama.jpg"',
'                  alt="Táxi Corolla da Giroto Táxi na Estação Rodoviária de Umuarama PR — atendimento 24 horas"',
'                  fill',
'                  priority',
'                  sizes="(max-width: 768px) 100vw, 600px"',
'                  className="object-cover object-center"',
'                  quality={85}',
'                />',
'                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />',
'                <div className="absolute bottom-0 left-0 right-0 p-5 grid grid-cols-4 gap-2">',
'                  {[',
'                    { value: "30", label: "anos" },',
'                    { value: "8", label: "motoristas" },',
'                    { value: "24h", label: "sempre" },',
'                    { value: "R$25", label: "urbano" },',
'                  ].map(s => (',
'                    <div key={s.label} className="text-center bg-black/40 backdrop-blur-sm rounded-xl py-2 border border-white/10">',
'                      <p className="text-xl font-extrabold text-yellow-400 leading-none">{s.value}</p>',
'                      <p className="text-[10px] text-gray-300 mt-0.5">{s.label}</p>',
'                    </div>',
'                  ))}',
'                </div>',
'              </div>'
].join("\n");
if (src.includes(oldBlock)) {
  src = src.replace(oldBlock, newBlock);
  fs.writeFileSync(path, src);
  console.log("HERO OK");
} else {
  console.log("ERRO: bloco nao encontrado");
}
