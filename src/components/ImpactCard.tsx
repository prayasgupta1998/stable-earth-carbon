import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ImpactCardProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

const ImpactCard = ({ title, text, icon }: ImpactCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        {icon && <div className="mb-4 text-accent">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
};

export default ImpactCard;
