// ✏️ EDITE AQUI: todos os dados do site ficam neste arquivo.
export const INFO = {
  name: 'Pit Stop Lanches',
  instagram: 'https://www.instagram.com/pitstoplanche/',
  whatsapp: '5511960519238',
  whatsappDisplay: '+55 11 96051-9238',
  street: 'Rua Ministro Lins de Barros, 359',
  city: 'São Paulo - SP',
  cep: '02674-000',
  hours: '[HORÁRIO DE FUNCIONAMENTO — preencher]',
}

export const wa = (msg = 'Olá, Pit Stop Lanches! Gostaria de fazer um pedido.') =>
  `https://wa.me/${INFO.whatsapp}?text=${encodeURIComponent(msg)}`

export const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${INFO.street}, ${INFO.city}, ${INFO.cep}`
)}`

// Imagem do hero: coloque a foto real em /public/hero.jpg e troque para '/hero.jpg'
export const HERO_IMAGE = ''

// Categorias de exemplo (renomeie conforme o cardápio oficial).
// Para cada produto real: { name, desc, price: 'R$ 00,00', img: '/produtos/x.jpg' }
const placeholder = { name: '[NOME DO HAMBÚRGUER]', desc: '[Descrição do produto]', price: 'R$ XX,XX', img: '' }
export const MENU = {
  Hambúrgueres: [placeholder, placeholder, placeholder],
  Combos: [placeholder, placeholder, placeholder],
  Acompanhamentos: [placeholder, placeholder, placeholder],
  Bebidas: [placeholder, placeholder, placeholder],
}
