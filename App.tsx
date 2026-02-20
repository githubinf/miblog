
import React from 'react';
import { CAPITULOS } from './constants';

const App: React.FC = () => {
  // Función para manejar la navegación externa sin mostrar la URL al pasar el ratón
  const realizarCompra = () => {
    window.location.href = 'https://fcofrancis.pay.clickbank.net/?cbitems=6';
  };

  // Función para desplazamiento suave a secciones internas
  const irASeccion = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-yellow-100 text-slate-900">
      {/* Título Principal de Impacto con Imagen del Libro */}
      <header className="relative pt-16 pb-10 lg:pt-28 lg:pb-16 bg-gradient-to-b from-sky-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.05] mb-6">
              ¿Cansado de Publicar en tu Bitácora y No Ver <span className="text-red-600 italic">Ni un Solo Dólar</span>?
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-light">
              Si has escrito decenas de artículos, promocionado productos que creías buenos y, al final del mes, tu cuenta de banco sigue igual... <span className="text-slate-900 font-medium underline decoration-yellow-400 decoration-4 underline-offset-8">esto es lo más importante que leerás este año.</span>
            </p>
            <div className="flex flex-col items-center lg:items-start gap-8">
              <button 
                onClick={() => irASeccion('oferta1')}
                className="group relative inline-flex items-center justify-center bg-sky-900 text-white px-16 py-7 rounded-sm text-2xl font-bold hover:bg-slate-900 transition-all duration-500 shadow-2xl shadow-sky-900/20 cursor-pointer"
              >
                Comenzar mi transformación por $9,99
                <span className="ml-4 group-hover:translate-x-2 transition-transform">→</span>
              </button>
              <div className="flex items-center gap-3 text-slate-400 text-sm font-medium tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Acceso instantáneo al conocimiento
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-sm lg:max-w-md w-full">
            <div className="relative group perspective-1000">
              <img 
                src="https://i.ibb.co/zV7cT4Vr/mi-blog-y-los-programas-de-afiliados.png" 
                alt="Portada del libro: Mi Blog y los Programas de Afiliados" 
                className="w-full h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Sección Narrativa: El Despertar del Creador */}
      <section id="historia" className="py-12 bg-white border-b border-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <article className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-4xl font-serif text-slate-900 mb-6 leading-tight">La verdad detrás de las noches en vela frente al monitor.</h2>
            <div className="space-y-8 text-slate-600 leading-[1.8] text-xl font-light">
              <p>
                <span className="text-3xl font-serif text-slate-900 float-left mr-3 mt-1">L</span>o sé porque yo estuve allí, exactamente donde tú estás ahora. Durante meses, publiqué como si estuviera lanzando mensajes en una botella al inmenso océano de la indiferencia digital. Horas interminables de investigación sobre temas que pensaba que a todo el mundo le interesarían. Noches de edición robadas al sueño, al descanso y, lo que es más doloroso, al tiempo con mi familia.
              </p>
              <p>
                El corazón estaba puesto en cada palabra, en cada párrafo que creía que sería la llave que abriría la puerta de mi nueva vida. Creía sinceramente que la calidad era suficiente. Que si escribía algo brillante, el mundo simplemente aparecería en mi puerta con cheques en la mano.
              </p>
              <div className="bg-slate-50 border-l-4 border-red-500 p-10 my-12 italic text-slate-700 font-serif text-2xl shadow-sm">
                "¿El resultado de todo aquel sacrificio? Cero ingresos. Cero reconocimiento. Solo mi computadora, una taza de café frío y una duda corrosiva que no me dejaba dormir."
              </div>
              <p>
                Me preguntaba una y otra vez: <span className="italic">"¿Realmente se puede vivir de esto o es simplemente un sueño diseñado para vender cursos a adolescentes ingenuos?"</span>. Mi laptop se convirtió en un recordatorio constante de mi fracaso. Cada vez que abría el panel de administración de mi bitácora y veía las estadísticas estancadas, sentía un nudo en el estómago.
              </p>
              <p>
                Probé guías superficiales que prometían riquezas en 30 días. Compraba programas que me dejaban con más dudas que respuestas y con la cartera notablemente más delgada. Leí a supuestos "expertos" que hablaban de libertad desde playas paradisíacas, pero que nunca habían publicado un solo artículo sin un patrocinio corporativo oculto detrás de sus palabras bonitas.
              </p>
              <h3 className="text-3xl font-serif text-slate-900 pt-5">El momento en que todo cambió</h3>
              <p>
                No fue un truco mágico. No fue un atajo secreto descubierto en un foro oscuro de la red profunda. Fue darme cuenta de que el problema no era mi esfuerzo —porque trabajaba como un galeote—, ni mi pasión —que era desbordante—, ni siquiera la calidad de mi redacción.
              </p>
              <p className="bg-sky-900 text-white p-12 rounded-sm shadow-xl font-serif text-2xl leading-relaxed italic">
                "El problema fundamental era que no tenía un sistema. No comprendía la arquitectura invisible que sostiene a las bitácoras que realmente facturan."
              </p>
              <p>
                Descubrí que la mercadotecnia de afiliados no consiste en poner enlaces y rezar para que alguien haga clic. Se trata de psicología humana, de construcción de puentes de confianza y, sobre todo, de ofrecer valor antes de pedir absolutamente nada a cambio.
              </p>
              <p>
                Hoy, ese mismo sitio del que dudé, y muchos otros que he construido siguiendo este método, me han dado lo que siempre busqué: <strong>Libertad Financiera.</strong> Pero no una libertad basada en lujos vacíos, sino en la capacidad de elegir: mis horarios, mi ubicación y, lo más importante, qué productos decido recomendar a mi comunidad.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Por qué el 95% falla (Análisis Profundo) */}
      <section id="filosofia" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-[0.4em] text-xs">Un Diagnóstico Crudo</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-4 leading-tight">¿Por qué sigues estancado a pesar de tu talento?</h2>
          </div>
          <div className="grid gap-6">
            <div className="bg-white p-12 shadow-sm border border-slate-100 rounded-sm">
              <h3 className="text-2xl font-serif mb-6 text-sky-900">1. La trampa de la gratificación instantánea</h3>
              <p className="text-slate-600 leading-loose text-lg">
                Vivimos en una época donde nos venden el éxito como algo que sucede de la noche a la mañana. La mayoría de los creadores empiezan con un entusiasmo ciego, publican tres artículos y, al no ver ingresos el primer mes, abandonan. El sistema que te presento en este libro está diseñado para la resistencia. La rentabilidad real se construye sobre cimientos sólidos, no sobre arenas moverizas.
              </p>
            </div>
            <div className="bg-white p-12 shadow-sm border border-slate-100 rounded-sm">
              <h3 className="text-2xl font-serif mb-6 text-sky-900">2. La desconexión entre contenido y monetización</h3>
              <p className="text-slate-600 leading-loose text-lg">
                Muchos escriben para sí mismos o para sus colegas, no para su audiencia. En el libro aprenderás a identificar qué problemas reales tiene tu lector y cómo el programa de afiliados adecuado es, en realidad, la solución a esos problemas. Cuando logras que tu recomendación sea vista como una ayuda y no como una venta, el juego cambia por completo.
              </p>
            </div>
            <div className="bg-white p-12 shadow-sm border border-slate-100 rounded-sm">
              <h3 className="text-2xl font-serif mb-6 text-sky-900">3. El error de la falta de ética</h3>
              <p className="text-slate-600 leading-loose text-lg">
                Tu audiencia no es idiota. Tienen un radar interno para detectar la falsedad. Si recomiendas un producto mediocre solo porque la comisión es alta, estás quemando tu activo más valioso: tu reputación. En estas páginas, te enseñaré por qué ser brutalmente honesto es, irónicamente, la estrategia más rentable a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Batalla - Reestructurado a Cuadrícula de 2 Columnas */}
      <section id="contenido" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Encabezado de Sección Centrado */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-sky-900 font-bold uppercase tracking-[0.3em] text-xs">El Recorrido</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mt-4 leading-tight">Lo que vas a descubrir en cada página</h2>
            <p className="text-lg md:text-xl text-slate-500 mt-6 leading-relaxed font-light">
              No es un manual teórico. Es un mapa de batalla con baches incluidos, con derrotas anotadas y con victorias pequeñas pero reales que te llevarán a la meta.
            </p>
            <div className="mt-10 p-8 bg-sky-50 border-l-4 border-sky-900 inline-block text-left">
              <p className="text-sky-900 font-medium italic text-lg md:text-xl leading-relaxed">
                "Este libro condensa 15 años de errores propios para que tú puedas evitarlos en 15 capítulos."
              </p>
            </div>
          </div>

          {/* Cuadrícula de Capítulos: 2 columnas alineadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16">
            {CAPITULOS.map((cap) => (
              <div key={cap.numero} className="group border-b border-slate-100 pb-10 flex flex-col items-start">
                <span className="text-slate-200 text-5xl md:text-6xl font-serif font-bold group-hover:text-sky-900/10 transition-colors mb-4">
                  {cap.numero.toString().padStart(2, '0')}
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-4 leading-tight">{cap.titulo}</h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">{cap.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autor - Biografía con Imagen Solicitada Circular */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 group">
              <div className="relative p-1 border border-slate-700 rounded-full h-full w-full">
                <img 
                  src="https://i.ibb.co/XkxVB4VJ/6-300x300.jpg" 
                  alt="Francisco González - Autor" 
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-serif leading-tight italic text-yellow-400">Francisco González</h2>
              <div className="text-slate-400 text-base leading-relaxed font-light">
                <p>
                  Estratega digital desde 2008 con más de 15 años gestionando bitácoras rentables. Tras 25 años en ventas, comprendí que la tecnología cambia pero la confianza humana es constante. Este libro es el destilado de esa experiencia: pura estrategia ética para ser dueño de tu tiempo sin atajos ni promesas vacías.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Garantía */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <h2 className="text-4xl font-serif text-slate-900 mb-5 leading-tight">Prueba el sistema sin un gramo de riesgo.</h2>
            <div className="space-y-4 text-slate-600 text-xl leading-relaxed font-light">
              <p>
                Sé que hay mucho charlatán suelto. Sé que has sido decepcionado antes por promesas que no valían ni el píxel en el que estaban escritas. Por eso, quiero que sea mi reputación la que asuma todo el peso de esta decisión.
              </p>
              <p className="font-medium text-slate-900 italic">
                Tienes 30 días naturales de garantía incondicional.
              </p>
              <p>
                Léelo de principio a fin. Analiza cada capítulo. Empieza a implementar los cimientos de tu plataforma. Si en esos 30 días no consideras que este mapa vale muchísimo más de lo que has pagado por él, simplemente me escribes y te devuelvo tus $9,99.
              </p>
            </div>
        </div>
      </section>

      {/* BLOQUE NUEVO: oferta1 */}
      <section id="oferta1" className="py-12 bg-sky-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-6 md:p-10 rounded-sm shadow-2xl border border-sky-100 text-center relative flex flex-col items-center">
            {/* Precio y Concepto */}
            <div className="mb-6 flex flex-col items-center gap-4">
              <div className="p-8 bg-slate-50 inline-block border border-slate-200">
                <span className="text-7xl md:text-8xl font-serif font-bold text-sky-900">$9,99</span>
                <p className="text-slate-400 uppercase tracking-widest text-xs mt-2 font-bold">Inversión Única</p>
              </div>
              <p className="text-slate-500 text-lg md:text-xl italic font-light max-w-sm">
                Menos de lo que cuesta una comida rápida para dos.
              </p>
            </div>

            {/* Botón de Acción Principal */}
            <button 
              onClick={realizarCompra}
              className="w-full max-w-lg bg-sky-900 text-white py-8 rounded-sm text-2xl font-bold hover:bg-slate-900 transition-all duration-500 shadow-2xl hover:-translate-y-1 mb-6 flex items-center justify-center tracking-tight cursor-pointer"
            >
              Sí, quiero acceso inmediato al mapa
            </button>

            {/* Sellos de Confianza */}
            <div className="flex flex-wrap justify-center gap-10 md:gap-16 pt-5 border-t border-slate-100 w-full">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span className="text-xs md:text-sm font-bold text-slate-700 tracking-widest uppercase">Calidad Editorial</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-sky-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                <span className="text-xs md:text-sm font-bold text-slate-700 tracking-widest uppercase">Compra Segura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Cierre: Una Invitación a la Reflexión */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">Un último pensamiento antes de que decidas.</h2>
          <div className="prose prose-slate prose-xl max-w-none text-slate-600 leading-loose italic font-light space-y-4 mb-10">
            <p>
              "Imagina despertar dentro de un año. Mira tu cuenta bancaria y ve cómo los ingresos de tu bitácora crecen mes tras mes, no por un golpe de suerte, sino porque has construido un sistema que funciona incluso cuando tú descansas."
            </p>
            <p>
              "Imagina la paz mental de saber que no dependes de las decisiones arbitrarias de un jefe o de los vaivenes de una oficina. Has construido algo tuyo, algo ético, algo que aporta valor real al mundo."
            </p>
          </div>
          <div className="space-y-6 lg:space-y-12">
            <p className="text-xl text-slate-500 font-light">Puedes seguir como hasta ahora, esperando que la suerte llame a tu puerta... <br/>o puedes decidir que ya es suficiente.</p>
            <div className="flex flex-col items-center gap-8">
              <button 
                onClick={() => irASeccion('oferta1')}
                className="bg-sky-900 text-white px-20 py-8 rounded-sm text-3xl font-bold hover:bg-slate-900 transition-all shadow-2xl hover:scale-105 active:scale-95 duration-300 inline-flex items-center justify-center cursor-pointer"
              >
                Sí, Francisco, quiero mi libertad
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Pie de Página Editorial Simplificado */}
      <footer className="bg-slate-900 text-slate-500 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="w-full">
            <p className="text-[9px] tracking-[0.4em] opacity-50 font-bold uppercase">
              &copy; {new Date().getFullYear()} Mi Blog y los Programas de Afiliados. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
