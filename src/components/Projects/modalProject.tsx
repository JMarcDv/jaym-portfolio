import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@heroui/react';
import React from 'react';

export default function ModalProject(props: {
  isOpen: boolean;
  onOpenChange: () => void;
  name: string;
  company: string;
  translation: (key: string) => string;
}) {
  const { isOpen, onOpenChange, name, company, translation } = props;
  const t = translation;

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      className="text-black"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {name} - {company}
            </ModalHeader>
            <ModalBody>
              <h3 className="text-lg">
                <strong>Projet</strong>
              </h3>
              <Divider />
              <p>{t('description')}</p>
              <p>{t('details')}</p>
              <h3 className="text-lg pt-3">
                <strong>Environnement</strong>
              </h3>
              <Divider />
              <p>
                <strong>Langages : </strong> {t('languages')} <br />
                <strong>Frameworks : </strong>
                {t('frameworks')} <br />
                <strong>Tests : </strong> {t('tests')} <br />
                <strong> + : </strong> {t('more')}
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
