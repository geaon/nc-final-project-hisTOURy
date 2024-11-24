import { useQuery } from "@tanstack/react-query";
import { supabase } from "../utils/supabaseClient";

export default function useMarkerInfo(markerId) {
  const { data, isPending, error } = useQuery({
    queryKey: ["single-marker", markerId],
    queryFn: () =>
      supabase
        .from("markers")
        .select()
        .eq("marker_id", markerId)
        .then((response) => {
          return response.data[0];
        }),
  });

  return { data, isPending, error };
}
