import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Facilities() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Наши объекты</h1>
          <p className="text-lg mb-12">
            Тюрьма строгого режима располагает самыми современными помещениями, призванными обеспечить максимальную безопасность и в то же время
            и в то же время создают благоприятные условия для реабилитации и исправления.
          </p>

          <Tabs defaultValue="housing" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="housing">Единицы жилья</TabsTrigger>
              <TabsTrigger value="medical">Медицинский центр</TabsTrigger>
              <TabsTrigger value="stolovka">Столовая</TabsTrigger>
              <TabsTrigger value="recreation">Зоны отдыха</TabsTrigger>
            </TabsList>
            <TabsContent value="housing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Единицы жилья</h2>
                  <p className="mb-4">
                    Наши жилые блоки предназначены для обеспечения безопасной и структурированной среды обитания заключенных.
                    Каждый блок оснащен:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Системы круглосуточного наблюдения</li>
                    <li>Безопасностью каждой камеры</li>
                    <li>Общественные зоны для контролируемой социализации</li>
                    <li>Усовершенствованные механизмы запирания</li>
                  </ul>
                  <p>
                    В планировке и дизайне наших жилых корпусов первостепенное внимание уделяется как безопасности, так и благополучию заключенных,
                    создавая сбалансированную среду, которая поддерживает наши усилия по реабилитации.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/cells.jpg?height=600&width=800"
                    alt="Единицы жилья"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="medical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Медицинский центр</h2>
                  <p className="mb-4">
                    Наш ультрасовременный медицинский центр предоставляет комплексные медицинские услуги всем заключенным.
                    К числу особенностей относятся:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Полностью оборудованное отделение неотложной помощи</li>
                    <li>Стоматологические учреждения</li>
                    <li>Услуги в области психического здоровья</li>
                    <li>Аптека с контролируемым распределением лекарств</li>
                  </ul>
                  <p>
                    Наш центр, укомплектованный квалифицированными медицинскими работниками, обеспечивает
                    своевременное и надлежащее медицинское обслуживание заключенных, сохраняя при этом высочайший уровень безопасности.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/medblock.jpg?height=600&width=800"
                    alt="Медицинский центр"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="stolovka">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Столовая</h2>
                  <p className="mb-4">
                    Наша столовая обеспечивает заключённых полноценным питанием, соответствующим всем необходимым стандартам.
                    Здесь предусмотрено:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Разнообразное меню с учётом пищевых норм</li>
                    <li>Специальные диетические блюда при необходимости</li>
                    <li>Чёткий режим питания с организованной раздачей</li>
                    <li>Чистота и соблюдение санитарных норм</li>
                  </ul>
                  <p>
                    Мы стремимся создать комфортные условия приёма пищи, обеспечивая заключённых сбалансированным питанием для
                    поддержания здоровья и сил.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/stolovka.jpg?height=600&width=800"
                    alt="Столовка"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="recreation">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Зоны отдыха</h2>
                  <p className="mb-4">
                    Наши зоны отдыха предоставляют заключенным возможности для физической активности и структурированного досуга.
                    К числу таких объектов относятся:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Спортивный зал</li>
                    <li>Открытый прогулочный дворик</li>
                    <li>Комнаты отдыха для настольных игр и общественных мероприятий</li>
                    <li>Художественные и музыкальные комнаты для творческого самовыражения</li>
                  </ul>
                  <p>
                    Эти зоны предназначены для укрепления физического здоровья, снижения стресса
                    и поощрения позитивного социального взаимодействия между заключенными, и все это в условиях строгой безопасности.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/sport.jpg?height=600&width=800"
                    alt="Зоны отдыха"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

