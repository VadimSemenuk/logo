import Brain from "@/components/icons/brain";
import Massage from "@/components/icons/massage";
import ReadPause from "@/components/icons/read-pause";
import DoubleArrowRight from "@/components/icons/double-arrow-right";
import Voice from "@/components/icons/voice";

const workAreas = [
  {
    title: "Постановка и коррекция звуков",
    description: "Коррекция нарушенных звуков, замен одних звуков на другие",
    icon: <Voice />,
  },
  {
    title: "Восстановление речи после инсульта и ЧМТ",
    description:
      "Восстановление утраченных речевых навыков после инсульта или черепно-мозговой травмы",
    icon: <Brain />,
    iconStyle: { margin: -30 },
  },
  {
    title: "Коррекция заикания",
    description: "Работа направлена на расслабление и улучшение контроля за речевым процессом",
    icon: <ReadPause />,
  },
  {
    title: "Ускоренная/замедленная речь",
    description: "Коррекция нарушений темпа речи и улучшение ее выразительности",
    icon: <DoubleArrowRight />,
  },
  {
    title: "Логопедический массаж",
    description: "Массаж для улучшения артикуляции, снятия напряжения и стимуляции речевых мышц",
    icon: <Massage />,
  },
];

export default workAreas;
