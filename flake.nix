{
  description = "Development environment for red_string";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            pnpm
            git
          ];

          shellHook = ''
            # Auto-install dependencies if node_modules is missing
            if [ ! -d "node_modules" ]; then
              echo "node_modules not found. Running pnpm install..."
              pnpm install
            fi

            echo "Run 'pnpm dev' to start the live development server."
          '';
        };
      });
}
