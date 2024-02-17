import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import React from "react";
// import Acenstream from './Json/Acenstream.json'
// import SFRD from './Json/SFRD.json'
// import ScriptRunner from './Json/ScriptRunner.json'
// import IA from './Json/Intelligence artificielle.json'
// import KryptoKnight from './Json/KryptoKnight.json'

export default function ModalProject(
  props: {
    isOpen: boolean;
    onOpenChange: () => void;
    name: string;
    company: string;
    data: {
      description: string;
      details: string;
      technicalEnv: {
        languages: string;
        frameworks: string,
        tests: string,
        more: string
      }
    }
  }) {
  const { isOpen, onOpenChange, name, company, data } = props;
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" className="text-black">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{name} - {company}</ModalHeader>
            <ModalBody>
              <h3 className="text-lg">
                <strong>
                  Projet
                </strong>
              </h3>
              <Divider />
              <p>
                {data.description}
              </p>
              <p>
                {data.details}
              </p>
              <h3 className="text-lg pt-3">
                <strong>
                  Environnement
                </strong>
              </h3>
              <Divider />
              <p>
                <strong>Langages : </strong> { data.technicalEnv.languages } <br />
                <strong>Frameworks : </strong>{ data.technicalEnv.frameworks } <br />
                <strong>Tests : </strong> { data.technicalEnv.tests } <br />
                <strong> + : </strong> { data.technicalEnv.more }
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Fermer
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}