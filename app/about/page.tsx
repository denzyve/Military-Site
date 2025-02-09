import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Информация про High Security Prison</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Тюрьма строгого режима - это ультрасовременное исправительное учреждение, предназначенное для поддержания
                общественной безопасности, реабилитации заключенных и поддержания высочайших стандартов безопасности и
                профессионализма в исправительных учреждениях.
              </p>
              <p className="text-lg mb-6">
                Наша миссия - обеспечить безопасную среду, способствующую реабилитации и готовящую заключенных к
                успешной реинтеграции в общество. Мы достигаем этого благодаря сочетанию строгих мер безопасности
                строгих мер безопасности, комплексных образовательных программ и поддержки психического здоровья.
              </p>
              <p className="text-lg">
                Уделяя особое внимание безопасности и реабилитации, мы стремимся обеспечить баланс между потребностями общественной безопасности и
                потенциала для исправления и роста заключенных.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about.jpg?height=800&width=600"
                alt="Arizona RP High Security Prison"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Наши основные ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Безопасность</h3>
              <p>
                Мы поддерживаем самые высокие стандарты безопасности, чтобы обеспечить безопасность наших сотрудников, заключенных и общественности.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Реабилитация</h3>
              <p>Мы верим в потенциал перемен и предоставляем заключенным возможности для обучения и роста.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Профессионализм</h3>
              <p>
                Наши сотрудники придерживаются самых высоких этических стандартов и постоянно стремятся к совершенству в своей работе.
                работе.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Руководящий состав</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-400">
                <Image 
                  src="/warden.jpg" 
                  alt="Warden Maksim Sanchez" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maksim Sanchez</h3>
              <p className="text-muted-foreground">Warden</p>
            </div>
            <div className="text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-400">
                <Image 
                  src="/dwarden1.jpg" 
                  alt="Deputy Warden Matthew Casper" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Matthew Casper</h3>
              <p className="text-muted-foreground">Deputy Warden</p>
            </div>
            <div className="text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-400">
                <Image 
                  src="/dwarden2.jpg" 
                  alt="Deputy Warden Yosif Anikienko" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Yosif Anikienko</h3>
              <p className="text-muted-foreground">Deputy Warden</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

