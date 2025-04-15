# Script to add submodules
git submodule add -b main https://git3.nexdev.net/l1/game-clients/game-client-packages/shared-components.git src/extensions/shared-components
git submodule add -b main https://git3.nexdev.net/l1/game-clients/game-client-packages/shared-classic-slot.git src/extensions/shared-classic-slot
git submodule add -b main https://git3.nexdev.net/l1/game-clients/game-client-packages/build-templates.git src/build-templates
git submodule add -b main https://git3.nexdev.net/l1/game-clients/game-client-packages/cocos-testing.git src/tests/cocos-testing
git submodule add -b main https://git3.nexdev.net/l1/game-clients/game-client-packages/i18n.git src/extensions/i18n

# Initialize and update submodules
git submodule update --init --recursive 