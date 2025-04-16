// JavaScript source code
const preguntas = [
    /* ===== BLOQUE 1: Ley N° 18.834 ===== */
    {
        pregunta: "¿Qué se entiende por 'carrera funcionaria' según el Art. 3°?",
        opciones: [
            "Un sistema de ascensos basado solo en antigüedad",
            "Un sistema integral que regula el empleo público con base en mérito y jerarquía",
            "Un programa de capacitación opcional para funcionarios",
            "Un beneficio exclusivo para empleados a contrata"
        ],
        respuesta: 1,
        explicacion: "La carrera funcionaria es un sistema integral (Art. 3° letra f) que garantiza igualdad de oportunidades, capacitación y ascenso por mérito."
    },
    {
        pregunta: "Un 'empleo a contrata' se caracteriza por ser:",
        opciones: [
            "Permanente y estable",
            "Transitorio y no permanente",
            "Solo para cargos directivos",
            "Renovable indefinidamente sin límite de tiempo"
        ],
        respuesta: 1,
        explicacion: "Los empleos a contrata son de carácter transitorio y no permanente según la definición del Estatuto Administrativo."
    },
    {
        pregunta: "Según el Art. 4°, ¿qué derecho tiene un suplente cuando reemplaza a un titular en licencia médica mayor a 30 días?",
        opciones: [
            "Percibir la remuneración completa del cargo",
            "Recibir solo el 50% del sueldo",
            "Percibir la remuneración de un grado inferior",
            "No tiene derecho a remuneración"
        ],
        respuesta: 2,
        explicacion: "El suplente tiene derecho a percibir la remuneración correspondiente al grado inferior inmediato al del cargo que reemplaza (Art. 4°)."
    },
    {
        pregunta: "¿Cuál es el plazo máximo para una suplencia en un cargo vacante?",
        opciones: [
            "3 meses",
            "6 meses",
            "1 año",
            "No hay plazo máximo"
        ],
        respuesta: 1,
        explicacion: "El plazo máximo para una suplencia en cargo vacante es de 6 meses según lo establecido en el Estatuto Administrativo."
    },
    {
        pregunta: "Según el Art. 12, ¿qué requisito NO es necesario para ingresar a la Administración del Estado?",
        opciones: [
            "Tener salud compatible con el cargo",
            "Poseer título universitario (sin importar la carrera)",
            "No estar inhabilitado para cargos públicos",
            "Haber aprobado educación básica"
        ],
        respuesta: 1,
        explicacion: "No se exige título universitario para todos los cargos, solo cuando la naturaleza del empleo lo requiera (Art. 12)."
    },
    {
        pregunta: "¿Qué implica el principio de probidad administrativa (Art. 61 letra g)?",
        opciones: [
            "Cumplir horarios estrictos",
            "Priorizar el interés público sobre el privado",
            "Realizar trabajos extraordinarios sin remuneración",
            "Delegar funciones en subordinados"
        ],
        respuesta: 1,
        explicacion: "La probidad administrativa exige anteponer el interés público al particular (Art. 61 letra g)."
    },
    {
        pregunta: "Si un funcionario recibe una orden que considera ilegal, ¿qué debe hacer según el Art. 62?",
        opciones: [
            "Cumplirla sin cuestionar",
            "Representarla por escrito y, si se reitera, cumplirla",
            "Negarse rotundamente a ejecutarla",
            "Denunciar directamente a la Contraloría"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 establece el deber de representación ante órdenes ilegales, pero si se reitera debe cumplirse."
    },
    {
        pregunta: "La jornada laboral máxima diaria para funcionarios públicos es:",
        opciones: [
            "8 horas",
            "9 horas",
            "10 horas",
            "12 horas"
        ],
        respuesta: 1,
        explicacion: "La jornada ordinaria máxima es de 9 horas diarias según lo establece el Estatuto Administrativo."
    },
    {
        pregunta: "Un funcionario con 18 años de servicio tiene derecho a:",
        opciones: [
            "15 días hábiles de feriado",
            "20 días hábiles de feriado",
            "25 días hábiles de feriado",
            "30 días hábiles de feriado"
        ],
        respuesta: 1,
        explicacion: "Con 18 años de servicio se tiene derecho a 20 días hábiles de feriado anual."
    },
    {
        pregunta: "¿Qué permiso puede solicitar un funcionario con goce de remuneraciones?",
        opciones: [
            "6 días hábiles por motivos particulares al año",
            "10 días hábiles para viajar al extranjero",
            "3 meses continuos sin sueldo",
            "Licencia médica preventiva"
        ],
        respuesta: 0,
        explicacion: "Los funcionarios tienen derecho a 6 días hábiles anuales por motivos particulares con goce de remuneraciones."
    }
    /* ===== BLOQUE 2: Ley N° 18.575 (Probidad) + GES/AUGE ===== */
    ,
    /* ===== BLOQUE 2: Ley N° 18.575 (Probidad) + GES/AUGE ===== */
    {
        pregunta: "El principio de probidad administrativa exige:",
        opciones: [
            "Cumplir metas de productividad",
            "Conducta intachable y lealtad al interés público",
            "Rendir informes mensuales de actividades",
            "Asistir a capacitaciones obligatorias"
        ],
        respuesta: 1,
        explicacion: "La probidad exige conducta intachable y primacía del interés público sobre el privado (Ley 18.575)."
    },
    {
        pregunta: "Según el Art. 54, ¿quién NO puede ingresar a la Administración del Estado?",
        opciones: [
            "Quien tenga un contrato vigente con el Estado por 100 UTM",
            "Un familiar hasta tercer grado de un jefe de departamento",
            "Un exfuncionario con 10 años de experiencia",
            "Un profesional con título técnico"
        ],
        respuesta: 1,
        explicacion: "El Art. 54 prohíbe el nepotismo (ingreso de familiares hasta 3er grado de autoridades superiores)."
    },
    {
        pregunta: "¿Cuál de estas conductas viola la probidad administrativa (Art. 62)?",
        opciones: [
            "Usar millaje aéreo de viajes oficiales para vacaciones personales",
            "Recibir un regalo protocolario de bajo valor",
            "Delegar funciones en un subordinado",
            "Solicitar permiso por motivos particulares"
        ],
        respuesta: 0,
        explicacion: "El Art. 62 prohíbe el uso de bienes estatales para beneficio personal."
    },
    {
        pregunta: "Un funcionario que usa recursos institucionales para beneficio personal comete falta de probidad según:",
        opciones: [
            "Art. 52",
            "Art. 62, número 3",
            "Art. 54, letra a",
            "Art. 61, letra f"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 N°3 tipifica como falta grave el uso indebido de bienes públicos."
    },
    {
        pregunta: "¿Qué debe hacer un jefe si un funcionario solicita eliminar una anotación de demérito?",
        opciones: [
            "Eliminarla automáticamente",
            "Dejar constancia escrita de los fundamentos si la rechaza",
            "Ignorar la solicitud",
            "Derivarla al Ministerio Público"
        ],
        respuesta: 1,
        explicacion: "El procedimiento exige fundamentar por escrito la negativa a eliminar anotaciones (Art. 87 del Estatuto Administrativo)."
    },
    {
        pregunta: "Las Garantías Explícitas en Salud (GES) NO incluyen:",
        opciones: [
            "Acceso a prestaciones",
            "Calidad en la atención",
            "Cobertura del 100% de todos los tratamientos",
            "Plazos máximos de espera"
        ],
        respuesta: 2,
        explicacion: "El GES garantiza acceso, oportunidad y protección financiera, pero no cubre el 100% de todos los tratamientos posibles."
    },
    {
        pregunta: "Para acceder al GES, el beneficiario debe:",
        opciones: [
            "Atenderse exclusivamente en la red designada por Fonasa/Isapre",
            "Pagar el costo total de la prestación",
            "Presentar un recurso de protección",
            "Tener más de 60 años"
        ],
        respuesta: 0,
        explicacion: "El GES requiere atención en la red prestadora asignada por el sistema de salud (Fonasa o Isapre)."
    },
    {
        pregunta: "En caso de urgencia vital por una patología GES, el usuario debe:",
        opciones: [
            "Esperar a ser derivado a su red asignada",
            "Dirigirse al servicio de urgencia más cercano",
            "Solicitar autorización previa a su Isapre",
            "Pagar un copago del 30%"
        ],
        respuesta: 1,
        explicacion: "En urgencias vitales, el paciente debe acudir al centro de salud más próximo, sin restricción de red."
    },
    {
        pregunta: "Si Fonasa no cumple con la garantía de oportunidad, el usuario debe:",
        opciones: [
            "Esperar 30 días antes de reclamar",
            "Reclamar ante la Superintendencia de Salud en 2 días",
            "Cambiarse a una Isapre",
            "Solicitar una indemnización"
        ],
        respuesta: 1,
        explicacion: "El reclamo por incumplimiento de plazos GES debe presentarse dentro de 2 días hábiles ante la Superintendencia."
    },
    {
        pregunta: "¿Qué población tiene derecho a atención preferente según la Ley 20.584?",
        opciones: [
            "Solo adultos mayores",
            "Personas con discapacidad y sus cuidadores",
            "Funcionarios públicos",
            "Pacientes con enfermedades crónicas"
        ],
        respuesta: 1,
        explicacion: "La Ley 20.584 establece atención preferente para personas con discapacidad y sus cuidadores/as."
    }
    /* ===== BLOQUE 3: Red Asistencial Antofagasta ===== */
    ,
    /* ===== BLOQUE 3: Red Asistencial Antofagasta ===== */
    {
        pregunta: "La misión del Servicio de Salud Antofagasta es:",
        opciones: [
            "Administrar recursos financieros de la región",
            "Garantizar atención de salud de manera integral y equitativa",
            "Fiscalizar a las Isapres de la región",
            "Exclusivamente tratar enfermedades GES"
        ],
        respuesta: 1,
        explicacion: "El Servicio de Salud Antofagasta tiene como misión garantizar atención integral y equitativa a la población (Plan de Salud Regional)."
    },
    {
        pregunta: "El Hospital Regional de Antofagasta se llama:",
        opciones: [
            "Dr. Carlos Cisternas",
            "Dr. Marcos Macuada",
            "Dr. Leonardo Guzmán",
            "21 de Mayo"
        ],
        respuesta: 2,
        explicacion: "El principal hospital de la región lleva el nombre del destacado médico Dr. Leonardo Guzmán."
    },
    {
        pregunta: "¿Qué hospital de la red es de alta complejidad?",
        opciones: [
            "Hospital de Taltal",
            "Hospital de Mejillones",
            "Hospital Dr. Carlos Cisternas (Calama)",
            "Hospital de Tocopilla"
        ],
        respuesta: 2,
        explicacion: "El Hospital de Calama es el único de alta complejidad en la red norte, junto al Regional de Antofagasta."
    },
    {
        pregunta: "El Centro Oncológico del Norte se enfoca en:",
        opciones: [
            "Atención primaria",
            "Rehabilitación de pacientes con cáncer",
            "Emergencias pediátricas",
            "Tratamientos dentales"
        ],
        respuesta: 1,
        explicacion: "Este centro especializado brinda tratamiento y rehabilitación oncológica a pacientes de la macrozona norte."
    },
    {
        pregunta: "¿Qué porcentaje de la población de Antofagasta es urbana según el censo 2017?",
        opciones: [
            "85%",
            "92%",
            "98%",
            "100%"
        ],
        respuesta: 2,
        explicacion: "El 97.9% de la población regional vive en zonas urbanas, concentrada principalmente en Antofagasta y Calama."
    },
    {
        pregunta: "¿Cuál de estos establecimientos NO pertenece al Servicio de Salud Antofagasta?",
        opciones: [
            "Hospital de Mejillones",
            "Hospital San Juan de Dios",
            "Hospital de Tocopilla",
            "Centro de Especialidades"
        ],
        respuesta: 1,
        explicacion: "El Hospital San Juan de Dios es un establecimiento privado, no forma parte de la red pública."
    },
    {
        pregunta: "El Hospital de Taltal es clasificado como:",
        opciones: [
            "Alta complejidad",
            "Baja complejidad con enfoque comunitario",
            "Centro de referencia nacional",
            "Establecimiento privado"
        ],
        respuesta: 1,
        explicacion: "Es un hospital de baja complejidad que atiende a la comunidad costera con servicios básicos."
    },
    {
        pregunta: "¿Qué servicio destaca en el Hospital de Tocopilla?",
        opciones: [
            "Unidad de trasplantes",
            "Sala de diálisis con 6 sillones",
            "Banco de sangre regional",
            "Centro de investigación"
        ],
        respuesta: 1,
        explicacion: "Este hospital cuenta con unidad de diálisis para atender a pacientes renales de la provincia."
    },
    {
        pregunta: "La Atención Primaria en Antofagasta se caracteriza por:",
        opciones: [
            "Atender solo emergencias",
            "Ser el primer nivel de contacto con el sistema público",
            "Realizar cirugías complejas",
            "Gestionar exclusivamente patologías GES"
        ],
        respuesta: 1,
        explicacion: "La APS es la puerta de entrada al sistema de salud, con enfoque preventivo y comunitario."
    },
    {
        pregunta: "¿Qué hospital fue construido mediante concesión?",
        opciones: [
            "Hospital de Taltal",
            "Hospital Regional de Antofagasta",
            "Hospital de Mejillones",
            "Hospital de Calama"
        ],
        respuesta: 1,
        explicacion: "El Hospital Regional se edificó bajo modelo de concesión (PPP) e inició operaciones en 2013."
    }
    /* ===== BLOQUE 4: Ley N° 20.584 + Situaciones Prácticas ===== */
    ,
    /* ===== BLOQUE 4: Ley N° 20.584 + Situaciones Prácticas ===== */
    {
        pregunta: "Según el Art. 5° bis, ¿quiénes tienen derecho a atención preferente?",
        opciones: [
            "Solo adultos mayores",
            "Personas con discapacidad y sus cuidadores",
            "Mayores de 60 años, personas con discapacidad y cuidadores",
            "Exclusivamente funcionarios públicos"
        ],
        respuesta: 2,
        explicacion: "El Art. 5° bis incluye a mayores de 60 años, personas con discapacidad y sus cuidadores/as (Ley 20.584)."
    },
    {
        pregunta: "El derecho a atención preferente debe respetar:",
        opciones: [
            "La priorización por urgencia vital",
            "El orden de llegada al establecimiento",
            "Solo horarios de mañana",
            "La disponibilidad de personal administrativo"
        ],
        respuesta: 0,
        explicacion: "La atención preferente no puede interferir con la priorización de urgencias vitales (Reglamento Ley 20.584)."
    },
    {
        pregunta: "Un cuidador de una persona con discapacidad puede exigir:",
        opciones: [
            "Acceso gratuito a medicamentos",
            "Ser atendido en cualquier momento sin esperar",
            "Atención preferente en acciones vinculadas a la salud",
            "Bonos de transporte prioritario"
        ],
        respuesta: 2,
        explicacion: "Los cuidadores tienen derecho a preferencia solo en atenciones relacionadas con su rol de cuidado (Art. 5° bis)."
    },
    {
        pregunta: "Un funcionario público recibe un regalo costoso de un proveedor. ¿Qué debe hacer según la probidad administrativa?",
        opciones: [
            "Aceptarlo si es por agradecimiento",
            "Rechazarlo o declararlo según protocolo",
            "Guardarlo para uso personal si nadie lo ve",
            "Donarlo a una beneficencia"
        ],
        respuesta: 1,
        explicacion: "La Ley 18.575 exige rechazar o declarar regalos que puedan comprometer la imparcialidad (Art. 62)."
    },
    {
        pregunta: "Un paciente con diabetes (patología GES) es derivado a un centro no perteneciente a su red. ¿Qué consecuencia aplica?",
        opciones: [
            "Pierde las garantías GES y usa libre elección",
            "Debe pagar multa por incumplimiento",
            "La Isapre cubre el 100% igualmente",
            "El Estado asume los costos automáticamente"
        ],
        respuesta: 0,
        explicacion: "Fuera de la red asignada, el GES no aplica y el paciente debe usar libre elección (con mayores costos)."
    },
    {
        pregunta: "Un tecnólogo médico observa que un colega usa equipos del hospital para proyectos personales. ¿Qué debe hacer según el Estatuto Administrativo?",
        opciones: [
            "Denunciarlo ante su jefe directo o autoridad competente",
            "Ignorarlo para evitar conflictos",
            "Reportarlo solo si afecta su trabajo",
            "Usar también los equipos"
        ],
        respuesta: 0,
        explicacion: "El Art. 67 del Estatuto obliga a denunciar faltas graves como el uso indebido de bienes públicos."
    },
    {
        pregunta: "Un funcionario con 12 años de servicio solicita permiso. ¿Cuántos días hábiles con goce de sueldo puede pedir al año?",
        opciones: [
            "3 días",
            "6 días",
            "10 días",
            "15 días"
        ],
        respuesta: 1,
        explicacion: "Los permisos por motivos particulares son de 6 días hábiles anuales con goce de remuneraciones."
    },
    {
        pregunta: "¿Qué acción tomaría si un superior le ordena realizar una práctica no autorizada en un paciente?",
        opciones: [
            "Ejecutarla para evitar sanciones",
            "Representar por escrito la orden y, si se insiste, cumplirla",
            "Negarse sin documentar el hecho",
            "Delegar la tarea en otro colega"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 del Estatuto exige representación escrita de órdenes ilegales, pero si se reitera debe cumplirse."
    },
    {
        pregunta: "Un usuario reclama por incumplimiento de plazo GES en su cirugía. ¿Qué institución debe intervenir si Fonasa no responde?",
        opciones: [
            "Ministerio de Salud",
            "Superintendencia de Salud",
            "Municipalidad",
            "PDI"
        ],
        respuesta: 1,
        explicacion: "La Superintendencia de Salud fiscaliza el cumplimiento de garantías GES (Ley 19.966)."
    },
    {
        pregunta: "Un paciente con cáncer es atendido en el Centro Oncológico del Norte. ¿Qué garantía GES aplica?",
        opciones: [
            "Acceso, oportunidad, protección financiera y calidad",
            "Solo gratuidad total",
            "Prioridad en lista de espera",
            "Atención domiciliaria obligatoria"
        ],
        respuesta: 0,
        explicacion: "Las patologías GES garantizan: acceso, plazos máximos, protección financiera (copago) y calidad."
    }
    /* ===== BLOQUE 5: Integración de Contenidos (Dificultad Alta) ===== */
    ,
    /* ===== BLOQUE 5: Integración de Contenidos (Dificultad Alta) ===== */
    {
        pregunta: "Un funcionario del Hospital de Calama con 16 años de servicio quiere tomar 7 días hábiles continuos de permiso. ¿Qué normativa aplica?",
        opciones: [
            "Ley 18.834 Art. 109 - Solo puede tomar 6 días hábiles al año con goce de sueldo",
            "Ley 20.584 - Puede tomar hasta 10 días por ser personal de salud",
            "GES - Tiene derecho a 15 días por antigüedad",
            "Ninguna limitación aplica en hospitales de alta complejidad"
        ],
        respuesta: 0,
        explicacion: "El Art. 109 del Estatuto Administrativo (Ley 18.834) limita a 6 días hábiles anuales los permisos con goce de sueldo, sin excepciones por cargo o ubicación."
    },
    {
        pregunta: "Un tecnólogo médico recibe un diagnóstico GES de glaucoma. ¿Qué garantía NO aplica en este caso?",
        opciones: [
            "Acceso a tratamiento en 90 días",
            "Cobertura del 100% del costo total sin copago",
            "Atención por profesional acreditado",
            "Protección financiera con copago regulado"
        ],
        respuesta: 1,
        explicacion: "El GES incluye copagos regulados (no gratuidad total), salvo para beneficiarios de Fonasa A y B (Ley 19.966 Art. 4°)."
    },
    {
        pregunta: "¿Qué conducta sería sancionada bajo el Art. 62 de la Ley 18.575?",
        opciones: [
            "Un jefe que asigna comisiones de servicio por 4 meses sin decreto fundado",
            "Un funcionario que usa el vehículo institucional para viajes personales",
            "Un profesional que rechaza una orden por considerarla ilegal",
            "Un suplente que exige remuneración completa en licencia médica >30 días"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 N°3 de la Ley de Probidad sanciona el uso indebido de bienes públicos para beneficio personal."
    },
    {
        pregunta: "Un paciente diabético GES llega al Hospital de Tocopilla en emergencia. ¿Qué debe hacer el personal?",
        opciones: [
            "Derivarlo inmediatamente a Antofagasta",
            "Atenderlo y estabilizarlo, luego coordinar con su red GES",
            "Solicitar pago anticipado por no ser su red asignada",
            "Negar la atención por no pertenecer a la red primaria"
        ],
        respuesta: 1,
        explicacion: "En emergencias, se prioriza la atención inmediata según Ley 20.584, independientemente de la red GES asignada."
    },
    {
        pregunta: "Según el Estatuto Administrativo, ¿qué requisito es indispensable para designar a un suplente?",
        opciones: [
            "Que el cargo esté vacante por más de 15 días",
            "Que el titular esté con licencia médica superior a 30 días",
            "Que se cumplan las normas del Título I, sin excepciones",
            "Que el suplente tenga mayor antigüedad que otros candidatos"
        ],
        respuesta: 2,
        explicacion: "El Título I del Estatuto establece los principios generales (mérito, igualdad de oportunidades) que deben respetarse en toda designación."
    },
    {
        pregunta: "La Sala de Diálisis del Hospital de Tocopilla opera bajo qué principio del Servicio de Salud Antofagasta?",
        opciones: [
            "Descentralización de servicios de alta complejidad",
            "Mejorar calidad de vida evitando traslados innecesarios",
            "Priorización de pacientes urbanos",
            "Exclusividad para pacientes GES"
        ],
        respuesta: 1,
        explicacion: "La instalación de servicios críticos en zonas alejadas busca reducir la carga de desplazamiento para pacientes crónicos (Plan de Salud Regional)."
    },
    {
        pregunta: "Un funcionario con 22 años de servicio tiene derecho a:",
        opciones: [
            "15 días hábiles de feriado",
            "20 días hábiles de feriado",
            "25 días hábiles de feriado",
            "30 días corridos de vacaciones"
        ],
        respuesta: 2,
        explicacion: "Según el Art. 110 del Estatuto Administrativo, con 20+ años de servicio corresponden 25 días hábiles de feriado anual."
    },
    {
        pregunta: "¿Qué artículo de la Ley 20.584 protege a un adulto mayor que espera 4 horas en urgencias?",
        opciones: [
            "Art. 3° sobre deberes del personal",
            "Art. 5° bis sobre atención preferente",
            "Art. 12 sobre tiempos de espera",
            "No aplica por ser caso de urgencia"
        ],
        respuesta: 1,
        explicacion: "El Art. 5° bis garantiza atención preferente a adultos mayores, aunque en urgencias se prioriza gravedad (Reglamento Ley 20.584)."
    },
    {
        pregunta: "Un jefe de servicio en Antofagasta debe investigar una presunta falta de probidad. ¿Qué procedimiento sigue?",
        opciones: [
            "Aplicar sanción inmediata",
            "Instruir investigación sumaria según Art. 126",
            "Derivar al Ministerio Público",
            "Solicitar renuncia voluntaria"
        ],
        respuesta: 1,
        explicacion: "El Art. 126 del Estatuto exige investigación sumaria para faltas graves, garantizando derecho a defensa antes de sancionar."
    },
    {
        pregunta: "La telemedicina en Mejillones refleja qué objetivo del Modelo de Atención?",
        opciones: [
            "Reducir costos operacionales",
            "Mejorar acceso y resolutividad en zonas alejadas",
            "Reemplazar completamente la atención presencial",
            "Priorizar pacientes privados"
        ],
        respuesta: 1,
        explicacion: "La telemedicina busca superar barreras geográficas (Política Nacional de Salud Digital 2020-2025)."
    }
    /* ===== BLOQUE 6: Ética Profesional y Gestión Hospitalaria ===== */
    ,
    /* ===== BLOQUE 6: Ética Profesional y Gestión Hospitalaria ===== */
    {
        pregunta: "Un tecnólogo médico descubre que un colega altera resultados de exámenes. ¿Qué debe hacer PRIMERO según las normativas?",
        opciones: [
            "Denunciar anónimamente en redes sociales",
            "Reportar al jefe directo o unidad de ética del hospital",
            "Confrontar directamente al colega",
            "Ignorarlo por no ser su área"
        ],
        respuesta: 1,
        explicacion: "El protocolo ético exige reportar primero a la autoridad inmediata o comité de ética hospitalario (Ley 20.584 Art. 7° y Código Sanitario)."
    },
    {
        pregunta: "Según el principio de probidad, ¿qué haría si un proveedor le ofrece un 'regalo' por agilizar un pedido?",
        opciones: [
            "Aceptarlo si es de bajo valor",
            "Rechazarlo y documentar el hecho",
            "Recibirlo y donarlo al hospital",
            "Pedir que lo entregue a otro departamento"
        ],
        respuesta: 1,
        explicacion: "La Ley 18.575 Art. 62 exige rechazar cualquier beneficio que comprometa imparcialidad, dejando constancia escrita."
    },
    {
        pregunta: "Un paciente reclama por mala atención en el Hospital de Taltal. ¿Qué derecho puede invocar?",
        opciones: [
            "Ley 20.584 (Derecho a trato digno y reclamo)",
            "GES (Garantía de calidad)",
            "Estatuto Administrativo (Art. 61)",
            "Todas las anteriores"
        ],
        respuesta: 3,
        explicacion: "Puede invocar: 1) Derechos Ley 20.584, 2) Garantías GES si aplica, y 3) Deberes funcionarios del Estatuto."
    },
    {
        pregunta: "¿Qué establecimiento de la red de Antofagasta tiene sala de diálisis?",
        opciones: [
            "Hospital de Mejillones",
            "Hospital de Tocopilla",
            "Centro Oncológico del Norte",
            "Hospital 21 de Mayo"
        ],
        respuesta: 1,
        explicacion: "El Hospital de Tocopilla cuenta con 6 sillones de diálisis para atender a pacientes renales de la provincia."
    },
    {
        pregunta: "El Modelo de Atención Integral del Servicio de Salud Antofagasta prioriza:",
        opciones: [
            "Tratamientos curativos sobre prevención",
            "Enfoque familiar y comunitario",
            "Atención exclusiva a patologías GES",
            "Centralización en hospitales urbanos"
        ],
        respuesta: 1,
        explicacion: "El modelo se basa en APS con enfoque familiar/comunitario (Plan de Salud Regional 2021-2025)."
    },
    {
        pregunta: "Para optimizar la atención en Calama (alta demanda migrante), la red debería:",
        opciones: [
            "Limitar acceso a no residentes",
            "Fortalecer capacitación intercultural y capacidad resolutiva",
            "Derivar todos los casos a Antofagasta",
            "Reducir cobertura GES"
        ],
        respuesta: 1,
        explicacion: "La política de salud intercultural (MINSAL) recomienda adaptar servicios a diversidad cultural y aumentar capacidad local."
    },
    {
        pregunta: "Durante una emergencia masiva, el protocolo GES indica:",
        opciones: [
            "Suspender todas las garantías",
            "Mantener prioridad para pacientes GES en riesgo vital",
            "Atender solo a afiliados de Fonasa",
            "Derivar todos los casos al Hospital Regional"
        ],
        respuesta: 1,
        explicacion: "Las urgencias GES mantienen prioridad si hay riesgo vital, según protocolos de emergencia del MINSAL."
    },
    {
        pregunta: "Si un funcionario público es sorprendido usando información privilegiada para beneficio personal, ¿qué sanción aplica?",
        opciones: [
            "Amonestación verbal",
            "Sumario administrativo y posible despido",
            "Capacitación obligatoria",
            "Traslado a otro departamento"
        ],
        respuesta: 1,
        explicacion: "Constituye falta grave al Estatuto Administrativo (Art. 62 N°7) y Ley 18.575, con sanciones hasta término de funciones."
    },
    {
        pregunta: "¿Qué artículo del Estatuto Administrativo protege a un funcionario que denuncia corrupción?",
        opciones: [
            "Art. 61 (letra k) sobre denuncia de irregularidades",
            "Art. 103 sobre feriados",
            "Art. 54 sobre inhabilidades",
            "Art. 12 sobre requisitos de ingreso"
        ],
        respuesta: 0,
        explicacion: "El Art. 61 letra k garantiza protección a quienes denuncien actos contrarios a la probidad."
    },
    {
        pregunta: "La telemedicina en Mejillones y Taltal busca resolver:",
        opciones: [
            "Falta de especialistas en zonas alejadas",
            "Reemplazo de personal técnico",
            "Reducción de costos en atención primaria",
            "Cumplimiento de metas GES"
        ],
        respuesta: 0,
        explicacion: "La telemedicina conecta a médicos generales con especialistas en centros de referencia (Estrategia Nacional de Salud Digital)."
    }
    /* ===== BLOQUE 7: Simulacro Final Cronometrado ===== */
    ,
    /* ===== BLOQUE 7: Simulacro Final Cronometrado ===== */
    {
        pregunta: "Un funcionario con 5 años de servicio solicita permiso para viajar al extranjero sin goce de sueldo. ¿Cuál es el plazo máximo que puede pedir?",
        opciones: [
            "3 meses",
            "6 meses",
            "1 año",
            "2 años"
        ],
        respuesta: 3,
        explicacion: "El Art. 110 del Estatuto Administrativo permite hasta 2 años de permiso sin remuneración, renovable por 1 año adicional."
    },
    {
        pregunta: "Según GES, ¿qué acción es INCORRECTA ante una urgencia vital por infarto?",
        opciones: [
            "Dirigirse al servicio de urgencia más cercano",
            "Esperar autorización de su Isapre antes de atenderse",
            "Solicitar traslado una vez estabilizado",
            "Notificar a Fonasa/Isapre dentro de las 24 horas"
        ],
        respuesta: 1,
        explicacion: "En urgencias GES no se requiere autorización previa (Protocolo MINSAL para Urgencias Vitales)."
    },
    {
        pregunta: "El Hospital Comunitario de Mejillones destaca por:",
        opciones: [
            "Ser de alta complejidad",
            "Su programa de telemedicina y rondas rurales",
            "Tener unidad de trasplantes",
            "Atender solo patologías GES"
        ],
        respuesta: 1,
        explicacion: "Este hospital prioriza estrategias de atención remota y visitas a zonas rurales (Plan de Salud Antofagasta 2021-2025)."
    },
    {
        pregunta: "¿Qué artículo del Estatuto Administrativo regula la obediencia a órdenes ilegales?",
        opciones: [
            "Art. 12",
            "Art. 44",
            "Art. 62",
            "Art. 103"
        ],
        respuesta: 2,
        explicacion: "El Art. 62 establece el deber de representación escrita ante órdenes contrarias a la legalidad."
    },
    {
        pregunta: "Un paciente con cáncer es derivado al Centro Oncológico del Norte. ¿Qué garantía GES NO aplica aquí?",
        opciones: [
            "Acceso a quimioterapia en 30 días",
            "Cobertura del 100% sin copagos",
            "Atención por oncólogo certificado",
            "Protección financiera con tope de pago"
        ],
        respuesta: 1,
        explicacion: "El GES incluye copagos regulados (no gratuidad total), excepto para beneficiarios Fonasa A y B."
    },
    {
        pregunta: "La prohibición de contratar a familiares de jefes hasta 3er grado está en:",
        opciones: [
            "Ley 18.834, Art. 4°",
            "Ley 18.575, Art. 54",
            "Ley 20.584, Art. 5° bis",
            "Ninguna de las anteriores"
        ],
        respuesta: 1,
        explicacion: "El Art. 54 de la Ley de Probidad (18.575) prohíbe el nepotismo en la administración pública."
    },
    {
        pregunta: "Un tecnólogo médico en Antofagasta recibe una orden de su jefe que pone en riesgo a un paciente. ¿Qué hace?",
        opciones: [
            "La cumple para evitar sanciones",
            "La representa por escrito y, si se insiste, la ejecuta",
            "Se niega sin documentar",
            "Delega la responsabilidad"
        ],
        respuesta: 1,
        explicacion: "Protocolo del Art. 62 del Estatuto: representación escrita y cumplimiento si la orden se reitera."
    },
    {
        pregunta: "¿Qué establecimiento NO es parte de la red del Servicio de Salud Antofagasta?",
        opciones: [
            "Hospital Dr. Carlos Cisternas",
            "Clínica Antofagasta",
            "Hospital Marcos Macuada",
            "Centro Oncológico del Norte"
        ],
        respuesta: 1,
        explicacion: "La Clínica Antofagasta es un centro privado, no pertenece a la red pública."
    },
    {
        pregunta: "Según la Ley 20.584, ¿quién tiene derecho a atención preferente?",
        opciones: [
            "Solo adultos mayores",
            "Personas con discapacidad y cuidadores",
            "Funcionarios públicos",
            "Pacientes con enfermedades raras"
        ],
        respuesta: 1,
        explicacion: "Art. 5° bis: atención preferente para personas con discapacidad y sus cuidadores/as."
    },
    {
        pregunta: "Un suplente en un cargo vacante no puede extenderse más de:",
        opciones: [
            "3 meses",
            "6 meses",
            "1 año",
            "2 años"
        ],
        respuesta: 1,
        explicacion: "Límite establecido en el Art. 4° del Estatuto Administrativo para suplencias en cargos vacantes."
    },
    {
        pregunta: "El principio de probidad administrativa exige:",
        opciones: [
            "Cumplir metas de productividad",
            "Priorizar el interés público sobre el privado",
            "Asistir a capacitaciones obligatorias",
            "Firmar informes mensuales"
        ],
        respuesta: 1,
        explicacion: "Base de la probidad según Ley 18.575: primacía del interés general sobre el particular."
    },
    {
        pregunta: "¿Qué hospital de la red fue construido mediante concesión?",
        opciones: [
            "Hospital de Taltal",
            "Hospital Regional de Antofagasta",
            "Hospital de Mejillones",
            "Hospital de Tocopilla"
        ],
        respuesta: 1,
        explicacion: "El Hospital Regional se edificó bajo modelo PPP (concesión) e inició operaciones en 2013."
    },
    {
        pregunta: "Un funcionario usa el vehículo institucional para viajes personales. Esto viola:",
        opciones: [
            "Art. 61 del Estatuto Administrativo",
            "Art. 62 de la Ley 18.575",
            "Art. 109 sobre permisos",
            "Normas GES"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 N°3 de la Ley de Probidad sanciona el uso indebido de bienes públicos."
    },
    {
        pregunta: "La población urbana en Antofagasta (Censo 2017) es:",
        opciones: [
            "85%",
            "92%",
            "98%",
            "100%"
        ],
        respuesta: 2,
        explicacion: "Datos INE: 97.9% de población urbana, principalmente en Antofagasta y Calama."
    },
    {
        pregunta: "¿Dónde debe constar una anotación de demérito?",
        opciones: [
            "En la hoja de vida del funcionario",
            "Solo en el registro del jefe directo",
            "En el diario oficial",
            "En la Superintendencia de Salud"
        ],
        respuesta: 0,
        explicacion: "Registro obligatorio en hoja de vida según Art. 87 del Estatuto Administrativo."
    },
    {
        pregunta: "Un paciente con EPOC (GES) es atendido fuera de su red. ¿Qué ocurre?",
        opciones: [
            "Pierde las garantías GES",
            "Debe pagar multa",
            "Su Isapre cubre el 100% igual",
            "El hospital asume los costos"
        ],
        respuesta: 0,
        explicacion: "Fuera de la red asignada, el GES no aplica y rige libre elección (Ley 19.966 Art. 4°)."
    },
    {
        pregunta: "La jornada laboral semanal máxima para funcionarios públicos es:",
        opciones: [
            "40 horas",
            "44 horas",
            "45 horas",
            "48 horas"
        ],
        respuesta: 1,
        explicacion: "Art. 111 del Estatuto Administrativo: jornada ordinaria de 44 horas semanales."
    },
    {
        pregunta: "¿Qué hace la Superintendencia de Salud si Fonasa incumple plazos GES?",
        opciones: [
            "Multar al paciente",
            "Designar un nuevo prestador en 2 días",
            "Cerrar el hospital",
            "Exigir indemnización"
        ],
        respuesta: 1,
        explicacion: "Procedimiento estándar para garantizar continuidad de atención (Reglamento GES)."
    },
    {
        pregunta: "El Club de Diabéticos de Mejillones refleja el enfoque en:",
        opciones: [
            "Atención curativa",
            "Participación comunitaria y prevención",
            "Reducción de costos",
            "Cumplimiento de metas GES"
        ],
        respuesta: 1,
        explicacion: "Modelo de autocuidado y educación grupal promovido por la Estrategia de Salud Familiar."
    },
    {
        pregunta: "Un funcionario con 18 años de servicio tiene derecho a:",
        opciones: [
            "15 días de feriado",
            "20 días de feriado",
            "25 días de feriado",
            "30 días de feriado"
        ],
        respuesta: 1,
        explicacion: "Art. 110 del Estatuto: 20 días hábiles de feriado anual con 15+ años de servicio."
    }
];
