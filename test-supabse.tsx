"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function TestSupabase() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    async function testConnection() {
      const supabase = createClient();

      const { error } = await supabase.auth.getSession();

      if (error) {
        setStatus("Connection failed: " + error.message);
      } else {
        setStatus("Supabase connected successfully!");
      }
    }

    testConnection();
  }, []);

  return (
    <div>
      <h2>Supabase Connection</h2>
      <p>{status}</p>
    </div>
  );
}