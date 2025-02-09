import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Свяжитесь с нами</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg mb-6">
                Если у вас есть вопросы или проблемы, пожалуйста, обращайтесь к нам. Наши преданные сотрудники
                готовы помочь вам.
              </p>
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Phone className="mr-4 h-6 w-6" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p>(123) 456-7890</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Mail className="mr-4 h-6 w-6" />
                    <div>
                      <p className="font-semibold">Электронная почта</p>
                      <p>maksanchez@vk.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <MapPin className="mr-4 h-6 w-6" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p>69 Restricted Area, Bone County, SA 88901</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Отправить нам сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                        Имя
                      </label>
                      <Input id="first-name" placeholder="Maksim" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                        Фамилия
                      </label>
                      <Input id="last-name" placeholder="Sanchez" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Электронная почта
                    </label>
                    <Input id="email" type="email" placeholder="maksanchez@vk.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Сообщение
                    </label>
                    <Textarea id="message" placeholder="Ваше сообщение здесь..." rows={4} />
                  </div>
                  <Button type="submit">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Каковы часы посещения?</h3>
                  <p>
                    Часы посещения: понедельник-пятница, с 9:00 до 16:00, суббота-воскресенье, с 10:00 до 15:00.
                    Более подробную информацию вы можете найти на странице «Информация о посещениях».
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Как я могу отправить деньги заключенному?</h3>
                  <p>
                    Вы можете отправить деньги заключенному через нашу безопасную онлайн-систему или по почте.
                    Более подробную информацию об этом процессе можно найти на странице «Услуги для заключенных».
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Какие предметы разрешено получать заключенным?</h3>
                  <p>
                    Заключенным разрешается получать определенные разрешенные предметы.
                    Полный список разрешенных предметов и порядок их отправки см. в Положении об имуществе заключенных.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

