import RoomCard from "@/components/RoomCard";
import type { Room } from "@/types";
import { cn } from "@/lib/utils";

interface RoomGridProps {
  rooms: Room[];
  className?: string;
}

export default function RoomGrid({ rooms, className }: RoomGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
