import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageSquare } from "lucide-react"

const sampleMessages = [
  {
    id: 1,
    name: "Emily Johnson",
    message:
      "Sarah and Michael, watching your love story unfold has been such a joy! You two are perfect for each other and I couldn't be happier for you. Wishing you a lifetime of love, laughter, and adventure together!",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "David & Lisa Chen",
    message:
      "Congratulations to the beautiful couple! We've known Michael since college and have never seen him happier than when he's with Sarah. You both deserve all the happiness in the world. Can't wait to celebrate with you!",
    date: "3 days ago",
  },
  {
    id: 3,
    name: "Grandma Rose",
    message:
      "My dearest Sarah, you look absolutely radiant! Michael is such a wonderful young man and I know you two will have a beautiful life together. Remember to always communicate, laugh together, and never go to bed angry. All my love!",
    date: "5 days ago",
  },
  {
    id: 4,
    name: "The Martinez Family",
    message:
      "Sarah and Michael, we are so excited to celebrate your special day with you! Your love for each other is inspiring and we know your marriage will be filled with joy, adventure, and endless love. Congratulations!",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Jessica & Tom",
    message:
      "From college roommates to bridesmaids - I've been there for all of Sarah's dating stories, and I knew Michael was 'the one' from day one! You two are meant to be together. Here's to your happily ever after!",
    date: "1 week ago",
  },
  {
    id: 6,
    name: "Uncle Bob",
    message:
      "Michael, welcome to the family! Sarah has always been our little princess, and we're so happy she found her prince. Take good care of each other and remember that marriage is a beautiful adventure. Congratulations!",
    date: "2 weeks ago",
  },
]

export function GuestbookMessages() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Messages from Our Loved Ones</h2>
      </div>

      <div className="space-y-6">
        {sampleMessages.map((message) => (
          <Card key={message.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary fill-current" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{message.name}</h3>
                    <span className="text-sm text-muted-foreground">{message.date}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{message.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 p-6 bg-muted/30 rounded-lg">
        <Heart className="h-8 w-8 mx-auto text-primary fill-current mb-3" />
        <p className="text-muted-foreground">
          Thank you to everyone who has shared their love and well wishes with us.
          <br />
          Your messages mean the world to us!
        </p>
      </div>
    </div>
  )
}
