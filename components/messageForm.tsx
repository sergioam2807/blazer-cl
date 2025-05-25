'use client";';
import { Input, Textarea } from "@heroui/input";
import { AnimatePresence } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Select, SelectItem } from "@heroui/select";

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
  asunto: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  telefono?: string;
  mensaje?: string;
  asunto?: string;
}

const asuntos = [
  "Arriendo andamios colgantes",
  "Arriendo andamios fijos",
  "Arriendo testiguera",
  "Servicio de transporte",
];

export default function MessageForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
    asunto: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.correo) newErrors.correo = "El correo es obligatorio";
    if (!formData.telefono) newErrors.telefono = "El teléfono es obligatorio";
    if (!formData.mensaje) newErrors.mensaje = "El mensaje es obligatorio";
    if (!formData.asunto) newErrors.asunto = "El asunto es obligatorio";

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          nombre: "",
          correo: "",
          telefono: "",
          mensaje: "",
          asunto: "",
        });
        setSuccessMessage(
          "El mensaje fue enviado y nos pondremos en contacto a la brevedad posible."
        );
      }
    } catch (err) {
      console.log("Hubo un error al intentar enviar el correo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 2000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <form className="flex flex-col gap-6">
      <Input
        isRequired
        errorMessage={errors.nombre}
        isInvalid={!!errors.nombre}
        label="Nombre"
        name="nombre"
        placeholder="Escribe tu nombre"
        type="text"
        value={formData.nombre}
        variant="underlined"
        onChange={handleChange}
      />
      <Input
        isRequired
        errorMessage={errors.correo}
        isInvalid={!!errors.correo}
        label="Email"
        name="correo"
        placeholder="Escribe email"
        type="email"
        value={formData.correo}
        variant="underlined"
        onChange={handleChange}
      />
      <Input
        isRequired
        errorMessage={errors.telefono}
        isInvalid={!!errors.telefono}
        label="Teléfono"
        name="telefono"
        placeholder="Escribe tu teléfono"
        type="tel"
        value={formData.telefono}
        variant="underlined"
        onChange={handleChange}
      />

      {/* Select para Asunto */}
      <Select
        isRequired
        className="max-w-full"
        errorMessage={errors.asunto}
        isInvalid={!!errors.asunto}
        label="Asunto"
        placeholder="Selecciona un asunto"
        selectedKeys={formData.asunto ? [formData.asunto] : []}
        variant="underlined"
        onSelectionChange={(keys) => {
          const value = Array.from(keys)[0] as string;

          setFormData((prev) => ({ ...prev, asunto: value }));
          setErrors((prev) => ({ ...prev, asunto: undefined }));
        }}
      >
        {asuntos.map((asunto) => (
          <SelectItem key={asunto}>{asunto}</SelectItem>
        ))}
      </Select>

      <Textarea
        isRequired
        errorMessage={errors.mensaje}
        id="mensaje"
        isInvalid={!!errors.mensaje}
        label="Mensaje"
        labelPlacement="inside"
        minRows={3}
        name="mensaje"
        placeholder="Escribe tu mensaje"
        value={formData.mensaje}
        variant="underlined"
        onChange={handleChange}
      />
      <button
        className="mt-2 bg-white text-black font-bold py-2 px-6 rounded-xl hover:bg-gray-300 transition-colors flex justify-center items-center min-h-[48px]"
        disabled={loading || !!successMessage}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <AnimatePresence mode="wait">
          {successMessage ? (
            <motion.span
              key="success"
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-700"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <svg
                className="size-6 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Enviado
            </motion.span>
          ) : (
            <motion.span
              key="enviar"
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              Enviar
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
