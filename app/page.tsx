import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/fon.jpg?height=1080&width=1920"
          alt="High Security Prison"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">High Security Prison</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Обеспечение общественной безопасности с помощью безопасного заключения</p>
          <Button asChild size="lg">
            <Link href="/about">
              Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Максимальная безопасность</CardTitle>
              </CardHeader>
              <CardContent>Современная система содержания заключенных из группы риска.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Реабилитационные программы</CardTitle>
              </CardHeader>
              <CardContent>Комплексные программы, направленные на успешную реинтеграцию.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">24/7 медицинская помощь</CardTitle>
              </CardHeader>
              <CardContent>Круглосуточные медицинские пункты для обеспечения здоровья заключенных.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">Хотите вступить в ряды сотрудников?</h2>
              <p>Оставьте заявку и узнайте всю необходимую информацию о процессе вступления.</p>
            </div>
            <Button asChild variant="secondary" size="lg">
              <Link href="https://forum.arizona-rp.com/threads/9189227/">Подать заявку</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Последние Новости</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Новое меню в столовой</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Мы добавили больше разнообразных блюд, улучшили качество питания и внедрили новые диетические опции. Попробуй и оцени!
                </p>
                <Button variant="outline" asChild>
                  <Link href="/visiting">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Улучшение условий содержания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Мы модернизируем камеры, обновляем системы безопасности и делаем пребывание более комфортным. Ждём ваши отзывы!
                </p>
                <Button variant="outline" asChild>
                  <Link href="/facilities">Узнать больше</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-destructive text-destructive-foreground">
        <div className="container">
          <div className="flex items-center justify-center">
            <AlertTriangle className="mr-2 h-6 w-6" />
            <p className="text-lg font-semibold">В экстренных случаях звоните на нашу круглосуточную горячую линию: @maksanchez</p>
          </div>
        </div>
      </section>
    </div>
  )
}

