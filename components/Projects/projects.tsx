import React from "react";
import CardProject from "./cardProject";

export default function Projects() {
    return(
      <section id="projects" className='lg:h-screen bg-gradient-to-b from-blue-950 to-blue-900'>
        <div className="flex flex-col justify-center lg:h-screen">
          <div className="flex flex-col lg:flex-row lg:justify-center items-center">
            <CardProject
              name="Acenstream"
              arobase="Acensi"
              description="Application de gestion de diffusions de contenus dynamiques sur une TV à distance"
              hashtags={["ReactJs", "NodeJs", "Docker", "Jest", "Cypress"]}
              srcAvatar="/assets/logos/logo_a_acensi.webp"
              locked
            />
            <CardProject
              name="SFRD"
              arobase="SFR"
              description="Application de gestion d'étiquettes destinées aux points de vente SFR"
              hashtags={["ReactJs", "NodeJs", "Docker", "Jest", "Cypress"]}
              srcAvatar="/assets/logos/logo_SFR.svg"
              locked
            />
            <CardProject
              name="ScriptRunner"
              arobase="Acensi"
              description="Script de création de macro Confluence avec ScriptRunner"
              hashtags={["Groovy", "Confluence", "Jira", 'Atlassian']}
              srcAvatar="/assets/logos/logo_scriptRunner.webp"
              locked
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-center items-center">
            <CardProject
              name="Intelligence artificielle"
              arobase="ParisCité"
              description="Projet d'école : Application de reconnaissance d'images d'escalier"
              hashtags={["JAVA", "Algorithmes", "IA"]}
              srcAvatar="/assets/logos/logo_paris_cite.webp"
              locked={false}
            />
            <CardProject
              name="ComparUtil"
              arobase="ParisCité"
              description="Projet d'école : Application mobile de sondage qui compare plusieurs produits entre eux"
              hashtags={["ReactNative", "PHP", "MySQL"]}
              srcAvatar="/assets/logos/logo_comparUtil.webp"
              locked={false}
            />
            <CardProject
              name="KryptoKnight"
              arobase="LycéeBuffon"
              description="Projet d'école : Création d'une messagerie chiffré avec l'algorithme RSA"
              hashtags={["Pyhton", "Algorithme"]}
              srcAvatar="/assets/logos/logo_buffon.webp"
              locked={false}
            />
          </div>
        </div>
      </section>
    )
}