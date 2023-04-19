import ReservationForm from "./components/ReservationForm";
import Header from "./components/Header";

export default function Reservation() {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <ReservationForm />
          </div>
        </div>
      </main>
    </main>
  );
}
