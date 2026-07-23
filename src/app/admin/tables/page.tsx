import { supabase } from "@/lib/supabase";

export default async function TablesPage() {
  const { data: tables, error } = await supabase
    .from("wedding_tables")
    .select("*")
    .order("table_name", { ascending: true });

  if (error) {
    return (
      <div>
        <h1 className="text-5xl font-light">Wedding Tables</h1>

        <p className="mt-6 text-red-600">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-5xl font-light">
        Wedding Tables
      </h1>

      <p className="mt-3 text-gray-500">
        Manage seating arrangements.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

        {tables?.map((table) => (
          <div
            key={table.id}
            className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-[#C9A96A]">
                  Wedding Table
                </p>

                <h2 className="text-3xl font-light mt-3">
                  {table.table_name}
                </h2>
              </div>

              <div className="h-16 w-16 rounded-2xl bg-[#C9A96A] text-white flex items-center justify-center text-2xl">
                🍽️
              </div>

            </div>

            <div className="mt-8 border-t pt-6">

              <p className="text-gray-500 text-sm">
                Capacity
              </p>

              <h3 className="text-5xl font-light mt-2">
                {table.seats}
              </h3>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}