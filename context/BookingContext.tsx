"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export interface BookingModalOptions {
  roomType?: string;
}

interface BookingContextType {
  isOpen: boolean;
  initialRoomType?: string;
  openBookingModal: (options?: BookingModalOptions) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialRoomType, setInitialRoomType] = useState<string | undefined>(undefined);

  const openBookingModal = useCallback((options?: BookingModalOptions) => {
    if (options?.roomType) {
      setInitialRoomType(options.roomType);
    } else {
      setInitialRoomType(undefined);
    }
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
    setInitialRoomType(undefined);
  }, []);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        initialRoomType,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingModal(): BookingContextType {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingProvider");
  }
  return context;
}
