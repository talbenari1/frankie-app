module Main where

import Server (server)
import LIO.HTTP.Server.Frankie (runFrankieServer)

main :: IO ()
main = runFrankieServer "dev" server
