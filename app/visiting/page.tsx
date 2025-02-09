import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, Clock, Calendar, Users } from "lucide-react"

export default function Visiting() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Информация для посетителей</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 text-yellow-500" />
                Важное уведомление
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Все посещения должны быть запланированы заранее. На посетителей распространяются строгие протоколы безопасности, и они должны
                придерживаться всех правил и положений учреждения.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2" />
                    Часы посещения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>День</TableHead>
                      <TableHead>Часы</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Понедельник - Пятница</TableCell>
                      <TableCell>9:00 - 16:00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Суббота - Воскресенье</TableCell>
                      <TableCell>10:00 - 15:00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2" />
                    Планирование визита
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Чтобы запланировать визит, выполните следующие действия:</p>
                <ol className="list-decimal list-inside">
                  <li>Зарегистрируйтесь в качестве утвержденного посетителя (если это еще не сделано)</li>
                  <li>Войдите в нашу систему онлайн-планирования</li>
                  <li>Выберите доступную дату и временной интервал</li>
                  <li>Получите подтверждение по электронной почте с информацией о посещении</li>
                </ol>
                <Button className="mt-4">Запланируйте визит</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                    Рекомендации для посетителей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Все посетители должны предъявить действительное удостоверение личности с фотографией, выданное правительством.</li>
                <li>Посетители младше 18 лет должны находиться в сопровождении взрослого посетителя</li>
                <li>Дресс-код: Требуется скромная и уместная одежда</li>
                <li>В зоне для посещений запрещено хранить личные вещи (предусмотрены шкафчики)</li>
                <li>Все посетители подлежат досмотру при входе</li>
                <li>В зоне посещения запрещено употреблять еду и напитки</li>
                <li>Физический контакт ограничивается короткими объятиями в начале и в конце визита</li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-muted-foreground">
            По всем вопросам и проблемам, связанным с посещением, обращайтесь в наш отдел обслуживания посетителей по адресу (123)
            456-7890 или по электронной почте @maksanchez.
          </p>
        </div>
      </section>
    </div>
  )
}

