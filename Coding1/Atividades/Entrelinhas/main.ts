import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const UsuarioSchema = z.enum(["Costureira", "Cliente"]);
type Usuario = z.infer<typeof UsuarioSchema>;
