import { cn } from "@/shared/lib/css";
import { Card, CardContent } from "@/shared/ui/card";
import { PawPrint } from "lucide-react";




interface ListAnimalsProps {
    animalNumber: string;
    animalName: string;
    isActive?: boolean; // Флаг активного состояния
    onClick?: () => void; // Обработчик клика
}

export const ListAnimals = ({
    animalNumber,
    animalName,
    isActive = false,
    onClick,
}: ListAnimalsProps) => {
    return (
        <Card
            className={cn(
                "hover:bg-accent transition-colors cursor-pointer mt-1 border-transparent py-5", // Базовые стили
                isActive && "bg-accent shadow-lg " // Стили для активного состояния
            )}
            onClick={onClick} // Обработчик клика
        >
            <CardContent className="p-1 flex items-center space-x-4">
                <div className="flex-shrink-0 mr-2">
                    <PawPrint
                        className={cn(
                            "h-8 w-8 text-primary", // Базовые стили иконки
                            isActive && "card-foreground" // Стили для активного состояния
                        )}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p
                        className={cn(
                            "text-md font-medium text-foreground truncate", // Базовые стили текста
                            isActive && "card-foreground" // Стили для активного состояния
                        )}
                    >
                        {animalNumber}
                    </p>
                    <p
                        className={cn(
                            "text-sm text-muted-foreground truncate", // Базовые стили текста
                            isActive && "card-foreground" // Стили для активного состояния
                        )}
                    >
                        {animalName ? animalName : "Без клички"}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}