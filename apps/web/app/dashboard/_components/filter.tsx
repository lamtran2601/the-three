import { File, ListFilter } from "lucide-react";

import { Button } from "components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";

export const Filter = () => {
  return (
    <div className="ml-auto flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
            <ListFilter className="size-3.5" />
            <span className="sr-only sm:not-sr-only">Filter</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>Fulfilled</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
        <File className="size-3.5" />
        <span className="sr-only sm:not-sr-only">Export</span>
      </Button>
    </div>
  );
};
